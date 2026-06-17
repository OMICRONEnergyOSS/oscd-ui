import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdElevation } from '../elevation/OscdElevation.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdIconButton } from '../iconbutton/OscdIconButton.js';

export type SnackbarVariant = 'info' | 'success' | 'warning' | 'error';

export type SnackbarMode = 'replace' | 'stack';

export type SnackbarAutoDismiss = boolean | number;

export type SnackbarAction = {
  label: string;
  onClick: () => void;
};

export type SnackbarShowOptions = {
  message: string;
  variant?: SnackbarVariant;
  autoDismiss?: SnackbarAutoDismiss;
  dismissible?: boolean;
  action?: SnackbarAction;
  mode?: SnackbarMode;
};

type SnackbarNotification = Required<
  Pick<SnackbarShowOptions, 'message' | 'variant' | 'dismissible'>
> & {
  id: string;
  action?: SnackbarAction;
  autoDismiss?: SnackbarAutoDismiss;
  closing?: boolean;
  timeoutId?: ReturnType<typeof setTimeout>;
};

const closeAnimationMs = 160;

const iconByVariant: Record<SnackbarVariant, string> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'cancel',
};

let nextSnackbarId = 0;

declare global {
  interface HTMLElementTagNameMap {
    'oscd-snackbar': OscdSnackbar;
  }
}

/**
 * @tagname oscd-snackbar
 * @summary Snackbar banner for transient status, warning, and error messages.
 *
 * @cssprop [--oscd-snackbar-z-index=9999] - Stacking order for the fixed snackbar stack.
 * @cssprop [--oscd-snackbar-bottom=16px] - Distance from the bottom viewport edge.
 * @cssprop [--oscd-snackbar-gap=8px] - Gap between stacked snackbars.
 * @cssprop [--oscd-snackbar-max-width=80vw] - Maximum snackbar stack width.
 * @cssprop [--oscd-snackbar-min-width=min(360px, 80vw)] - Minimum snackbar item width.
 * @cssprop [--oscd-snackbar-min-height=48px] - Minimum snackbar item height.
 * @cssprop [--oscd-snackbar-container-padding=12px 16px] - Snackbar item padding.
 * @cssprop [--oscd-snackbar-elevation-level=3] - Snackbar elevation level.
 * @cssprop [--oscd-snackbar-enter-duration=160ms] - Show animation duration.
 * @cssprop [--oscd-snackbar-exit-duration=160ms] - Hide animation duration.
 * @cssprop [--oscd-snackbar-text-color=#233042] - Snackbar text color.
 * @cssprop [--oscd-snackbar-font-family=var(--md-sys-typescale-body-large-font)] - Snackbar font family.
 * @cssprop [--oscd-snackbar-font-size=var(--md-sys-typescale-body-large-size)] - Snackbar font size.
 * @cssprop [--oscd-snackbar-line-height=var(--md-sys-typescale-body-large-line-height)] - Snackbar line height.
 * @cssprop [--oscd-snackbar-message-line-clamp=3] - Maximum visible message lines before truncation.
 *
 * @cssprop [--oscd-snackbar-info-container-color=var(--md-sys-color-secondary-container)] - Info snackbar container color.
 * @cssprop [--oscd-snackbar-info-text-color=var(--oscd-snackbar-text-color)] - Info text color.
 * @cssprop [--oscd-snackbar-info-icon-color=var(--md-sys-color-on-secondary-container)] - Info icon color.
 *
 * @cssprop [--oscd-snackbar-success-container-color=#d8f8bd] - Success snackbar container color.
 * @cssprop [--oscd-snackbar-success-text-color=var(--oscd-snackbar-text-color)] - Success text color.
 * @cssprop [--oscd-snackbar-success-icon-color=#5ba300] - Success icon color.
 *
 * @cssprop [--oscd-snackbar-warning-container-color=#fff584] - Warning snackbar container color.
 * @cssprop [--oscd-snackbar-warning-text-color=var(--oscd-snackbar-text-color)] - Warning text color.
 * @cssprop [--oscd-snackbar-warning-icon-color=#f5a400] - Warning icon color.
 *
 * @cssprop [--oscd-snackbar-error-container-color=#ffd9df] - Error snackbar container color.
 * @cssprop [--oscd-snackbar-error-text-color=var(--oscd-snackbar-text-color)] - Error text color.
 * @cssprop [--oscd-snackbar-error-icon-color=#d52031] - Error icon color.
 *
 * @csspart snackbar - Snackbar surface.
 * @csspart icon - Leading variant icon.
 * @csspart message - Message text.
 * @csspart action - Optional action button.
 * @csspart action-icon - Icon inside the optional action button.
 * @csspart action-label - Label inside the optional action button.
 * @csspart close - Optional close button.
 * @csspart elevation - Elevation shadow.
 *
 * @example
 * ```ts
 * const id = snackbar.show({
 *   message: 'Validation failed',
 *   variant: 'error',
 *   autoDismiss: false,
 *   action: {
 *     label: 'See More',
 *     onClick: () => showValidationDetails(),
 *   },
 * });
 *
 * snackbar.close(id); // closes a visible or queued notification
 * snackbar.close(); // closes visible notifications and clears queued notifications
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSnackbar extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-elevation': OscdElevation,
    'oscd-icon': OscdIcon,
    'oscd-icon-button': OscdIconButton,
  };

  @property({ type: Number, attribute: 'default-auto-dismiss-ms' })
  defaultAutoDismissMs = 5000;

  @property({ type: Number, attribute: 'auto-dismiss-ms-per-word' })
  autoDismissMsPerWord = 500;

  @property({ type: Number, attribute: 'min-auto-dismiss-ms' })
  minAutoDismissMs = 5000;

  @property({ type: Number, attribute: 'max-auto-dismiss-ms' })
  maxAutoDismissMs = 15000;

  @property({ type: Number, attribute: 'max-visible' })
  maxVisible = 1;

  @property({ type: String })
  mode: SnackbarMode = 'replace';

  @state()
  private notifications: SnackbarNotification[] = [];

  private queuedNotifications: SnackbarNotification[] = [];

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    OscdSnackbar.clearTimeouts(this.notifications);
    OscdSnackbar.clearTimeouts(this.queuedNotifications);
  }

  /**
   * Shows a notification and returns an id that can be passed to `close()`.
   * In `stack` mode, notifications beyond `maxVisible` are queued until space
   * becomes available. Auto-dismiss timing starts when a notification becomes
   * visible, not while it is queued.
   */
  show(options: SnackbarShowOptions): string {
    const notification: SnackbarNotification = {
      id: `snackbar-${++nextSnackbarId}`,
      message: options.message,
      variant: options.variant ?? 'info',
      dismissible: options.dismissible ?? true,
      action: options.action,
      autoDismiss: options.autoDismiss,
    };
    const mode = options.mode ?? this.mode;

    if (mode === 'replace') {
      this.dismissNotifications(this.notifications);
      OscdSnackbar.clearTimeouts(this.queuedNotifications);
      this.queuedNotifications = [];
      this.notifications = [
        ...this.notifications.filter(existing => !existing.closing),
        notification,
      ];
      this.scheduleAutoDismiss(notification);

      return notification.id;
    }

    if (this.visibleNotifications.length < this.visibleLimit) {
      this.notifications = [...this.notifications, notification];
      this.scheduleAutoDismiss(notification);
    } else {
      this.queuedNotifications = [...this.queuedNotifications, notification];
    }

    return notification.id;
  }

  /**
   * Closes a visible or queued notification by id. Without an id, closes all
   * visible notifications and clears all queued notifications.
   */
  close(id?: string): void {
    if (id) {
      const queuedNotificationCount = this.queuedNotifications.length;
      this.queuedNotifications = this.queuedNotifications.filter(
        notification => notification.id !== id,
      );
      const notifications = this.notifications.filter(
        notification => notification.id === id,
      );

      if (
        notifications.length === 0 &&
        this.queuedNotifications.length !== queuedNotificationCount
      ) {
        return;
      }

      if (notifications.length === 0) {
        return;
      }

      this.dismissNotifications(notifications);
      return;
    }

    const notifications = this.notifications;
    OscdSnackbar.clearTimeouts(notifications);
    OscdSnackbar.clearTimeouts(this.queuedNotifications);
    this.queuedNotifications = [];

    if (notifications.length === 0) {
      return;
    }

    this.dismissNotifications(notifications);
  }

  private dismissNotifications(notifications: SnackbarNotification[]): void {
    OscdSnackbar.clearTimeouts(notifications);
    this.notifications = this.notifications.map(notification =>
      notifications.includes(notification)
        ? { ...notification, closing: true }
        : notification,
    );

    setTimeout(() => {
      this.notifications = this.notifications.filter(
        notification =>
          !notifications.some(closing => closing.id === notification.id),
      );
      this.promoteQueuedNotifications();
    }, closeAnimationMs);
  }

  private handleActionClick(notification: SnackbarNotification): void {
    notification.action?.onClick();
    this.close(notification.id);
  }

  private handleCloseClick(notification: SnackbarNotification): void {
    this.close(notification.id);
  }

  private get visibleLimit(): number {
    return Math.max(1, Math.floor(this.maxVisible));
  }

  private get visibleNotifications(): SnackbarNotification[] {
    return this.notifications.filter(notification => !notification.closing);
  }

  private static clearTimeouts(notifications: SnackbarNotification[]): void {
    notifications.forEach(notification => {
      clearTimeout(notification.timeoutId);
    });
  }

  private promoteQueuedNotifications(): void {
    const availableSlots = this.visibleLimit - this.visibleNotifications.length;

    if (availableSlots <= 0 || this.queuedNotifications.length === 0) {
      return;
    }

    const promotedNotifications = this.queuedNotifications.slice(
      0,
      availableSlots,
    );
    this.queuedNotifications = this.queuedNotifications.slice(availableSlots);
    this.notifications = [...this.notifications, ...promotedNotifications];
    promotedNotifications.forEach(notification => {
      this.scheduleAutoDismiss(notification);
    });
  }

  private scheduleAutoDismiss(notification: SnackbarNotification): void {
    const timeoutMs = this.resolveAutoDismissMs(
      notification,
      notification.autoDismiss,
    );

    if (timeoutMs === undefined) {
      return;
    }

    notification.timeoutId = setTimeout(() => {
      this.close(notification.id);
    }, timeoutMs);
  }

  private resolveAutoDismissMs(
    notification: SnackbarNotification,
    autoDismiss: SnackbarAutoDismiss | undefined,
  ): number | undefined {
    if (autoDismiss === false) {
      return undefined;
    }

    if (typeof autoDismiss === 'number') {
      return autoDismiss > 0 ? autoDismiss : undefined;
    }

    if (autoDismiss === true) {
      return this.calculateAutoDismissMs(notification.message);
    }

    if (notification.variant === 'error' || notification.action) {
      return undefined;
    }

    return this.calculateAutoDismissMs(notification.message);
  }

  private calculateAutoDismissMs(message: string): number | undefined {
    if (this.defaultAutoDismissMs <= 0) {
      return undefined;
    }

    const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
    const timeoutMs =
      this.defaultAutoDismissMs + wordCount * this.autoDismissMsPerWord;

    return Math.min(
      this.maxAutoDismissMs,
      Math.max(this.minAutoDismissMs, timeoutMs),
    );
  }

  private renderAction(
    notification: SnackbarNotification,
  ): TemplateResult | typeof nothing {
    if (!notification.action) {
      return nothing;
    }

    return html`<button
      class="action"
      part="action"
      type="button"
      @click=${() => this.handleActionClick(notification)}
    >
      <oscd-icon part="action-icon">arrow_forward</oscd-icon>
      <span part="action-label">${notification.action.label}</span>
    </button>`;
  }

  private renderCloseButton(
    notification: SnackbarNotification,
  ): TemplateResult | typeof nothing {
    if (!notification.dismissible) {
      return nothing;
    }

    return html`<oscd-icon-button
      class="close"
      part="close"
      aria-label="Close"
      @click=${() => this.handleCloseClick(notification)}
    >
      <oscd-icon>close</oscd-icon>
    </oscd-icon-button>`;
  }

  private renderNotification(
    notification: SnackbarNotification,
  ): TemplateResult {
    return html`<div
      class=${classMap({
        snackbar: true,
        [notification.variant]: true,
        closing: !!notification.closing,
      })}
      part="snackbar"
      role=${notification.variant === 'error' ? 'alert' : 'status'}
    >
      <oscd-icon class="variant-icon" part="icon"
        >${iconByVariant[notification.variant]}</oscd-icon
      >
      <span class="message" part="message">${notification.message}</span>
      ${this.renderAction(notification)} ${this.renderCloseButton(notification)}
      <oscd-elevation part="elevation"></oscd-elevation>
    </div>`;
  }

  override render(): TemplateResult {
    return html`${[...this.notifications]
      .reverse()
      .map(notification => this.renderNotification(notification))}`;
  }

  static override styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      bottom: var(--oscd-snackbar-bottom, 16px);
      left: 50%;
      flex-direction: column-reverse;
      align-items: center;
      gap: var(--oscd-snackbar-gap, 8px);
      width: max-content;
      max-width: var(--oscd-snackbar-max-width, 80vw);
      transform: translateX(-50%);
      z-index: var(--oscd-snackbar-z-index, 9999);
      pointer-events: none;
    }

    .snackbar {
      box-sizing: border-box;
      display: grid;
      position: relative;
      flex: 0 0 auto;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      align-items: center;
      width: max-content;
      min-width: var(--oscd-snackbar-min-width, min(360px, 80vw));
      max-width: 100%;
      min-height: var(--oscd-snackbar-min-height, 48px);
      padding: var(--oscd-snackbar-container-padding, 12px 16px);
      --md-elevation-level: var(--oscd-snackbar-elevation-level, 3);
      color: var(
        --oscd-snackbar-text-color,
        var(--md-sys-color-on-surface, #233042)
      );
      font-family: var(
        --oscd-snackbar-font-family,
        var(--md-sys-typescale-body-large-font)
      );
      font-size: var(
        --oscd-snackbar-font-size,
        var(--md-sys-typescale-body-large-size)
      );
      line-height: var(
        --oscd-snackbar-line-height,
        var(--md-sys-typescale-body-large-line-height)
      );
      pointer-events: auto;
      animation: snackbar-slide-in var(--oscd-snackbar-enter-duration, 160ms)
        ease-out;
    }

    .snackbar.closing {
      pointer-events: none;
      animation: snackbar-fade-out var(--oscd-snackbar-exit-duration, 160ms)
        ease-in forwards;
    }

    .snackbar.info {
      background: var(
        --oscd-snackbar-info-container-color,
        var(--md-sys-color-secondary-container)
      );
      color: var(
        --oscd-snackbar-info-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.success {
      background: var(
        --oscd-snackbar-success-container-color,
        var(--md-sys-color-tertiary-container, #d8f8bd)
      );
      color: var(
        --oscd-snackbar-success-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.warning {
      background: var(
        --oscd-snackbar-warning-container-color,
        var(--md-sys-color-error-container, #fff584)
      );
      color: var(
        --oscd-snackbar-warning-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.error {
      background: var(
        --oscd-snackbar-error-container-color,
        var(--md-sys-color-error-container, #ffd9df)
      );
      color: var(
        --oscd-snackbar-error-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .variant-icon {
      width: 24px;
      height: 24px;
      margin-inline-end: 16px;
      font-size: 24px;
      color: var(
        --oscd-snackbar-info-icon-color,
        var(--md-sys-color-on-secondary-container)
      );
    }

    .success .variant-icon {
      color: var(
        --oscd-snackbar-success-icon-color,
        var(--md-sys-color-on-tertiary-container, #5ba300)
      );
    }

    .warning .variant-icon {
      color: var(
        --oscd-snackbar-warning-icon-color,
        var(--md-sys-color-on-error-container, #f5a400)
      );
    }

    .error .variant-icon {
      color: var(
        --oscd-snackbar-error-icon-color,
        var(--md-sys-color-error, #d52031)
      );
    }

    .message {
      display: -webkit-box;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: anywhere;
      white-space: normal;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--oscd-snackbar-message-line-clamp, 3);
    }

    .action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: max-content;
      margin-inline-start: 16px;
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      cursor: pointer;
      font: inherit;
      font-size: var(--md-sys-typescale-label-large-size);
      font-weight: var(--md-sys-typescale-label-large-weight);
      line-height: var(--md-sys-typescale-label-large-line-height);
    }

    .action oscd-icon {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }

    .close {
      margin-inline-start: 16px;
      color: inherit;
    }

    @keyframes snackbar-slide-in {
      from {
        opacity: 0;
        transform: translateY(16px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes snackbar-fade-out {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  `;
}
