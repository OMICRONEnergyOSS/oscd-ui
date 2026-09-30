import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

import { OscdSnackbar } from './OscdSnackbar.js';

if (!customElements.get('test-oscd-snackbar')) {
  customElements.define('test-oscd-snackbar', OscdSnackbar);
}

describe('OscdSnackbar', () => {
  let snackbar: OscdSnackbar;

  afterEach(() => {
    fixtureCleanup();
  });

  beforeEach(async () => {
    snackbar = await fixture<OscdSnackbar>(
      html`<test-oscd-snackbar></test-oscd-snackbar>`,
    );
  });

  it('shows a notification and returns its id', async () => {
    const id = snackbar.show({
      message: 'Upload was successful',
      variant: 'success',
      autoDismiss: false,
    });

    await snackbar.updateComplete;

    const notification = snackbar.shadowRoot?.querySelector('.snackbar');

    expect(id).to.match(/^snackbar-\d+$/);
    expect(notification?.textContent).to.contain('Upload was successful');
    expect(notification?.classList.contains('success')).to.equal(true);
  });

  it('announces variant labels and hides the decorative icon', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 4;
    const variants = [
      ['info', 'Info:', 'status'],
      ['success', 'Success:', 'status'],
      ['warning', 'Warning:', 'status'],
      ['error', 'Error:', 'alert'],
    ] as const;

    variants.forEach(([variant]) => {
      snackbar.show({
        message: `${variant} message`,
        variant,
        autoDismiss: false,
      });
    });
    await snackbar.updateComplete;

    variants.forEach(([variant, label, role]) => {
      const notification = snackbar.shadowRoot?.querySelector(
        `.snackbar.${variant}`,
      );

      expect(notification?.getAttribute('role')).to.equal(role);
      expect(
        notification?.querySelector('.visually-hidden')?.textContent?.trim(),
      ).to.equal(label);
      expect(
        notification
          ?.querySelector('.variant-icon')
          ?.getAttribute('aria-hidden'),
      ).to.equal('true');
      expect(notification?.textContent).to.contain(`${variant} message`);
    });
  });

  it('accepts a localized variant label override', async () => {
    snackbar.show({
      message: 'Upload successful',
      variant: 'success',
      variantLabel: 'Erfolgreich:',
      autoDismiss: false,
    });
    await snackbar.updateComplete;

    expect(
      snackbar.shadowRoot
        ?.querySelector('.visually-hidden')
        ?.textContent?.trim(),
    ).to.equal('Erfolgreich:');
  });

  it('applies all per-variant color facets', async () => {
    snackbar.style.setProperty(
      '--oscd-snackbar-success-container-color',
      'rgb(1, 2, 3)',
    );
    snackbar.style.setProperty(
      '--oscd-snackbar-success-supporting-text-color',
      'rgb(4, 5, 6)',
    );
    snackbar.style.setProperty(
      '--oscd-snackbar-success-icon-color',
      'rgb(7, 8, 9)',
    );
    snackbar.style.setProperty(
      '--oscd-snackbar-success-action-label-text-color',
      'rgb(10, 11, 12)',
    );
    snackbar.style.setProperty(
      '--oscd-snackbar-success-close-icon-color',
      'rgb(13, 14, 15)',
    );
    snackbar.show({
      message: 'Upload successful',
      variant: 'success',
      autoDismiss: false,
      action: {
        label: 'Open',
        onClick: () => undefined,
      },
    });
    await snackbar.updateComplete;

    const notification =
      snackbar.shadowRoot?.querySelector<HTMLElement>('.snackbar.success');
    const variantIcon =
      notification?.querySelector<HTMLElement>('.variant-icon');
    const action = notification?.querySelector<HTMLElement>('.action');
    const close = notification?.querySelector<HTMLElement>('.close');

    expect(
      notification ? getComputedStyle(notification).backgroundColor : '',
    ).to.equal('rgb(1, 2, 3)');
    expect(notification ? getComputedStyle(notification).color : '').to.equal(
      'rgb(4, 5, 6)',
    );
    expect(variantIcon ? getComputedStyle(variantIcon).color : '').to.equal(
      'rgb(7, 8, 9)',
    );
    expect(action ? getComputedStyle(action).color : '').to.equal(
      'rgb(10, 11, 12)',
    );
    expect(
      close
        ? getComputedStyle(close).getPropertyValue(
            '--md-icon-button-icon-color',
          )
        : '',
    ).to.equal('rgb(13, 14, 15)');
  });

  it('replaces the current notification by default', async () => {
    snackbar.show({
      message: 'First message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Second message',
      autoDismiss: false,
    });

    await snackbar.updateComplete;

    const notifications = snackbar.shadowRoot?.querySelectorAll(
      '.snackbar:not(.closing)',
    );

    expect(notifications?.length).to.equal(1);
    expect(notifications?.[0].textContent).to.contain('Second message');
  });

  it('queues notifications beyond the visible limit', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 2;

    snackbar.show({
      message: 'First message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Second message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Third message',
      autoDismiss: false,
    });

    await snackbar.updateComplete;

    const notifications = Array.from(
      snackbar.shadowRoot?.querySelectorAll('.snackbar') ?? [],
    );

    expect(notifications.length).to.equal(2);
    const textContent = notifications
      .map(notification => notification.textContent)
      .join(' ');

    expect(textContent).to.contain('First message');
    expect(textContent).to.contain('Second message');
    expect(textContent).not.to.contain('Third message');
  });

  it('promotes queued notifications when a visible notification closes', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 2;
    const firstId = snackbar.show({
      message: 'First message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Second message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Third message',
      autoDismiss: false,
    });

    snackbar.close(firstId);
    await wait(170);
    await snackbar.updateComplete;

    const textContent = Array.from(
      snackbar.shadowRoot?.querySelectorAll('.snackbar') ?? [],
    )
      .map(notification => notification.textContent)
      .join(' ');

    expect(textContent).not.to.contain('First message');
    expect(textContent).to.contain('Second message');
    expect(textContent).to.contain('Third message');
  });

  it('closes a queued notification by id before it is displayed', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 1;
    const firstId = snackbar.show({
      message: 'First message',
      autoDismiss: false,
    });
    const queuedId = snackbar.show({
      message: 'Queued message',
      autoDismiss: false,
    });

    snackbar.close(queuedId);
    snackbar.close(firstId);
    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.textContent).not.to.contain('Queued message');
  });

  it('closes visible notifications and clears queued notifications without an id', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 1;
    snackbar.show({
      message: 'Visible message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Queued message',
      autoDismiss: false,
    });

    snackbar.close();
    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.textContent).not.to.contain('Visible message');
    expect(snackbar.shadowRoot?.textContent).not.to.contain('Queued message');
  });

  it('auto-dismisses success notifications using a calculated timeout', async () => {
    snackbar.defaultAutoDismissMs = 10;
    snackbar.autoDismissMsPerWord = 0;
    snackbar.minAutoDismissMs = 0;
    snackbar.maxAutoDismissMs = 100;

    snackbar.show({
      message: 'Saved successfully',
      variant: 'success',
    });
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).not.to.equal(null);

    await wait(20);
    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).to.equal(null);
  });

  it('keeps stacked auto-dismiss notifications visible independently', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 2;
    snackbar.defaultAutoDismissMs = 40;
    snackbar.autoDismissMsPerWord = 0;
    snackbar.minAutoDismissMs = 0;
    snackbar.maxAutoDismissMs = 100;

    snackbar.show({
      message: 'First message',
      variant: 'success',
    });
    await snackbar.updateComplete;

    await wait(10);

    snackbar.show({
      message: 'Second message',
      variant: 'success',
    });
    await snackbar.updateComplete;

    const notifications = snackbar.shadowRoot?.querySelectorAll('.snackbar');

    expect(notifications?.length).to.equal(2);

    await wait(20);
    await snackbar.updateComplete;

    const visibleNotifications = snackbar.shadowRoot?.querySelectorAll(
      '.snackbar:not(.closing)',
    );

    expect(visibleNotifications?.length).to.equal(2);
  });

  it('starts auto-dismiss timers only after queued notifications are promoted', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 1;
    snackbar.defaultAutoDismissMs = 20;
    snackbar.autoDismissMsPerWord = 0;
    snackbar.minAutoDismissMs = 0;
    snackbar.maxAutoDismissMs = 100;
    const firstId = snackbar.show({
      message: 'Blocking message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Queued message',
      variant: 'success',
    });

    await wait(40);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.textContent).not.to.contain('Queued message');

    snackbar.close(firstId);
    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.textContent).to.contain('Queued message');

    await wait(30);
    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.textContent).not.to.contain('Queued message');
  });

  it('does not auto-dismiss errors by default', async () => {
    snackbar.defaultAutoDismissMs = 10;

    snackbar.show({
      message: 'Validation failed',
      variant: 'error',
    });
    await snackbar.updateComplete;

    await wait(20);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).not.to.equal(null);
  });

  it('treats autoDismiss false and zero as sticky', async () => {
    snackbar.defaultAutoDismissMs = 10;

    snackbar.show({
      message: 'Zero timeout',
      variant: 'success',
      autoDismiss: 0,
    });
    await snackbar.updateComplete;

    await wait(20);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).not.to.equal(null);

    snackbar.show({
      message: 'False timeout',
      variant: 'success',
      autoDismiss: false,
    });
    await snackbar.updateComplete;

    await wait(20);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).not.to.equal(null);
  });

  it('runs actions and dismisses the notification', async () => {
    const onClick = spy();

    snackbar.show({
      message: 'Validation failed',
      variant: 'error',
      autoDismiss: false,
      action: {
        label: 'See More',
        onClick,
      },
    });
    await snackbar.updateComplete;

    snackbar.shadowRoot?.querySelector<HTMLButtonElement>('.action')?.click();
    await snackbar.updateComplete;

    expect(onClick.calledOnce).to.equal(true);

    await wait(170);
    await snackbar.updateComplete;

    expect(snackbar.shadowRoot?.querySelector('.snackbar')).to.equal(null);
  });

  it('closes a specific notification by id', async () => {
    snackbar.mode = 'stack';
    snackbar.maxVisible = 2;
    const firstId = snackbar.show({
      message: 'First message',
      autoDismiss: false,
    });
    snackbar.show({
      message: 'Second message',
      autoDismiss: false,
    });

    snackbar.close(firstId);
    await snackbar.updateComplete;

    const notification = snackbar.shadowRoot?.querySelector('.snackbar');

    expect(notification?.textContent).to.contain('Second message');
  });
});

function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

describe('OscdSnackbar side-effect free', () => {
  let defineSpy: SinonSpy;

  beforeEach(() => {
    defineSpy = spy(window.customElements, 'define');
  });

  afterEach(() => {
    defineSpy.restore();
    fixtureCleanup();
  });

  it('should not call customElements.define as a side effect during import/instantiation', async () => {
    await import('./OscdSnackbar.js');

    const oscdSnackbar = await fixture(
      html`<test-oscd-snackbar></test-oscd-snackbar>`,
    );

    expect(oscdSnackbar.shadowRoot).not.to.be.null;
    expect(oscdSnackbar.constructor.name).to.equal('OscdSnackbar');

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
