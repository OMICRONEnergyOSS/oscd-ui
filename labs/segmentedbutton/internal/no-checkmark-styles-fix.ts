import { css } from 'lit';

export const noCheckmarkFixStyles = css`
  .md3-segmented-button--without-checkmark .md3-segmented-button__checkmark {
    display: none;
    opacity: 0;
  }

  .md3-segmented-button--selected.md3-segmented-button--without-checkmark
    .md3-segmented-button__graphic {
    width: var(--_icon-size);
  }

  .md3-segmented-button--selected.md3-segmented-button--with-label.md3-segmented-button--without-checkmark
    .md3-segmented-button__icon {
    opacity: 1;
  }
`;
