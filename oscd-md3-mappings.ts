import { css } from 'lit';

export const oscdMd3Mappings = css`
  :host {
    --md-sys-color-error: var(--oscd-theme-error, #dc322f);
    --md-sys-color-error-container: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-inverse-on-surface: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-inverse-surface: var(--oscd-theme-base03, #002b36);
    --md-sys-color-on-error: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-on-error-container: var(--oscd-theme-base00, #657b83);
    --md-sys-color-on-primary: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-on-primary-container: var(--oscd-theme-base00, #657b83);
    --md-sys-color-on-secondary: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-on-secondary-container: var(--oscd-theme-base00, #657b83);
    --md-sys-color-on-surface: var(--oscd-theme-base00, #657b83);
    --md-sys-color-on-surface-variant: var(--oscd-theme-base0, #839496);
    --md-sys-color-on-tertiary-container: var(--oscd-theme-base00, #657b83);
    --md-sys-color-outline: var(--oscd-theme-base01, #586e75);
    --md-sys-color-outline-variant: var(--oscd-theme-base1, #93a1a1);
    --md-sys-color-primary: var(--oscd-theme-primary, #2aa198);
    --md-sys-color-primary-container: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-scrim: #000;
    --md-sys-color-secondary: var(--oscd-theme-secondary, #6c71c4);
    --md-sys-color-secondary-container: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-shadow: #000;
    --md-sys-color-surface: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-surface-container: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-surface-container-high: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-surface-container-highest: var(--oscd-theme-base2, #eee8d5);
    --md-sys-color-surface-container-low: var(--oscd-theme-base3, #fdf6e3);
    --md-sys-color-tertiary: var(--oscd-theme-secondary, #6c71c4);
    --md-sys-color-tertiary-container: var(--oscd-theme-base2, #eee8d5);
  }
`;

export const oscdPaletteComponentMappings = css`
  :host {
    --oscd-ace-editor-syntax-keyword-color: var(
      --oscd-theme-secondary,
      #0b335b
    );
    --oscd-ace-editor-syntax-string-color: var(--oscd-theme-base00, #46505d);
    --oscd-ace-editor-syntax-tag-color: var(--oscd-theme-secondary, #0b335b);
    --oscd-ace-editor-syntax-attribute-name-color: var(
      --oscd-theme-primary,
      #2485e5
    );
    --oscd-ace-editor-syntax-comment-color: var(--oscd-theme-base01, #3d4651);
    --oscd-ace-editor-syntax-number-color: var(--oscd-theme-base00, #46505d);
    --oscd-ace-editor-syntax-invalid-color: var(--oscd-theme-error, #dc322f);
    --oscd-ace-editor-syntax-storage-color: var(--oscd-theme-primary, #2485e5);
    --oscd-ace-editor-syntax-operator-color: var(--oscd-theme-base01, #3d4651);
    --oscd-ace-editor-syntax-parameter-color: var(
      --oscd-theme-warning,
      #b58900
    );
    --oscd-ace-editor-syntax-regex-color: var(--oscd-theme-error, #dc322f);
    --oscd-ace-editor-step-color: var(--oscd-theme-warning, #b58900);
  }
`;
