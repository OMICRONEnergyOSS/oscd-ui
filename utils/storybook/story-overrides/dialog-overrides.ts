import { StorybookOverrides } from './story-overrides.js';
import { html } from 'lit';
import { useArgs } from 'storybook/preview-api';
import { action } from 'storybook/actions';

import '../../../button/oscd-filled-button.js';

export const dialogOverrides: StorybookOverrides = {
  'oscd-dialog': {
    meta: {
      render: argz => {
        const [_, updateArgs] = useArgs();
        return html`
          <oscd-filled-button
            @click=${() => {
              updateArgs({ open: true });
            }}
            >Open Dialog</oscd-filled-button
          >
          
            <oscd-dialog ?open=${argz.open}
                @closed=${(event: CustomEvent) => {
                  action('dialog closed')({ event });
                  updateArgs({ open: false });
                }}>
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This action
                cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button @click=${() => updateArgs({ open: false })}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button @click=${() => updateArgs({ open: false })}
                  >Confirm</oscd-filled-button
                >
              </div>
            </oscd-dialog>
          </div>
        `;
      },
    },
  },
};
