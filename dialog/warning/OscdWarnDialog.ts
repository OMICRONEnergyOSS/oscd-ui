import { LitElement, TemplateResult, html, css } from 'lit';
import { query, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdDialog } from '../OscdDialog.js';
import { OscdFilledButton } from '../../button/OscdFilledButton.js';

export type WarningDetail = {
  heading: string;
  message: string;
  onOk: () => void;
};

/**
 * @tagname oscd-warn-dialog
 * @summary A warning dialog component for displaying important messages to the user.
 * It is designed to be used as a singleton, and can be accessed via the `warning` method.
 *
 */
export class OscdWarnDialog extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-dialog': OscdDialog,
    'oscd-filled-button': OscdFilledButton,
  };

  @state()
  private heading?: string = '';

  @state()
  private message?: string = '';

  @state()
  private onOk?: () => void;

  @query('oscd-dialog') dialog!: OscdDialog;

  public warning(details: WarningDetail) {
    this.heading = details.heading;
    this.message = details.message;
    this.onOk = details.onOk;
    this.dialog.show();
  }

  private close(): void {
    this.dialog.close();
    this.heading = '';
    this.message = '';
    this.onOk = undefined;
  }

  private handleOk(): void {
    if (this.onOk) {
      this.onOk();
    }
    this.close();
  }

  override render(): TemplateResult {
    return html`
      <oscd-dialog @closed=${this.close}>
        <div slot="headline">${this.heading}</div>
        <div slot="content" class="dialog-content">
          <p>${this.message}</p>
        </div>
        <div slot="actions">
          <oscd-filled-button slot="primaryAction" @click=${this.handleOk}
            >OK</oscd-filled-button
          >
        </div>
      </oscd-dialog>
    `;
  }

  static override styles = css`
    .dialog-content {
      margin-top: 16px;
    }
  `;
}
