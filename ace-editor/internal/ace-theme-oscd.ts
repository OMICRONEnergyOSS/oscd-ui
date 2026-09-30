/*
 * Custom Ace theme styled through oscd-ace-editor component tokens.
 */

type AceDefine = (
  id: string,
  deps: string[],
  factory: (
    require: unknown,
    exports: {
      isDark: boolean;
      cssClass: string;
      cssText: string;
    },
    module: unknown,
  ) => void,
) => void;

type AceTheme = {
  caption: string;
  theme: string;
  isDark: boolean;
  name: string;
};

type AceThemeListModule = {
  themes: AceTheme[];
  themesByName: Record<string, AceTheme>;
};

type AceRequire = (moduleId: string) => unknown;

type AceWindow = {
  ace: {
    define: AceDefine;
    require?: AceRequire;
  };
};

const ace = (window as unknown as AceWindow).ace;

const OPENSCD_THEME_BRIGHT: AceTheme = {
  caption: 'OpenSCD',
  theme: 'ace/theme/oscd',
  isDark: false,
  name: 'oscd',
};

const OPENSCD_THEME_DARK: AceTheme = {
  caption: 'OpenSCD',
  theme: 'ace/theme/oscd',
  isDark: true,
  name: 'oscd_dark',
};

const aceDefine: AceDefine = ace.define;

function registerThemeInSettingsMenu() {
  const themelist = ace.require?.('ace/ext/themelist') as
    AceThemeListModule | undefined;

  if (!themelist) {
    return;
  }

  const insertTheme = (sourceTheme: AceTheme) => {
    const existingTheme = themelist.themes.find(
      theme => theme.name === sourceTheme.name,
    );

    if (existingTheme) {
      Object.assign(existingTheme, sourceTheme);
      themelist.themesByName[sourceTheme.name] = existingTheme;
      return;
    }

    const themeToInsert = { ...sourceTheme };

    themelist.themes.push(themeToInsert);
    themelist.themesByName[sourceTheme.name] = themeToInsert;
  };

  insertTheme(OPENSCD_THEME_BRIGHT);
  insertTheme(OPENSCD_THEME_DARK);
}

aceDefine(
  'ace/theme/oscd',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function (
    require: unknown,
    exports: { isDark: boolean; cssClass: string; cssText: string },
  ) {
    exports.isDark = false;
    exports.cssClass = 'ace-oscd';
    const css = String.raw;
    exports.cssText = css`
      .ace-oscd .ace_gutter {
        background: var(
          --oscd-ace-editor-gutter-color,
          var(--md-sys-color-surface-container-low, #f7f2fa)
        );
        color: var(
          --oscd-ace-editor-gutter-text-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
        overflow: hidden;
      }

      .ace-oscd .ace_print-margin {
        width: 1px;
        background: var(
          --oscd-ace-editor-gutter-color,
          var(--md-sys-color-surface-container-low, #f7f2fa)
        );
      }

      .ace-oscd {
        background-color: var(
          --oscd-ace-editor-container-color,
          var(--md-sys-color-surface, #fef7ff)
        );
        color: var(
          --oscd-ace-editor-text-color,
          var(--md-sys-color-on-surface, #1d1b20)
        );
        font-family: var(--oscd-ace-editor-font-family, monospace);
      }

      .ace-oscd .ace_keyword.ace_operator,
      .ace-oscd .ace_lparen,
      .ace-oscd .ace_rparen,
      .ace-oscd .ace_punctuation {
        color: var(
          --oscd-ace-editor-syntax-operator-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_keyword,
      .ace-oscd .ace_set.ace_statement,
      .ace-oscd .ace_constant.ace_buildin,
      .ace-oscd .ace_support.ace_function,
      .ace-oscd .ace_class,
      .ace-oscd .ace_variable,
      .ace-oscd .ace_heading {
        color: var(
          --oscd-ace-editor-syntax-keyword-color,
          var(--md-sys-color-secondary, #625b71)
        );
      }

      .ace-oscd .ace_storage,
      .ace-oscd .ace_constant.ace_library,
      .ace-oscd .ace_support.ace_constant,
      .ace-oscd .ace_support.ace_other,
      .ace-oscd .ace_support.ace_storedprocedure,
      .ace-oscd .ace_list {
        color: var(
          --oscd-ace-editor-syntax-storage-color,
          var(--md-sys-color-primary, #6750a4)
        );
      }

      .ace-oscd .ace_set.ace_statement {
        text-decoration: underline;
      }

      .ace-oscd .ace_cursor {
        color: var(
          --oscd-ace-editor-cursor-color,
          var(--md-sys-color-primary, #6750a4)
        );
      }

      .ace-oscd .ace_invisible {
        color: var(
          --oscd-ace-editor-gutter-text-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_constant.ace_language {
        color: var(
          --oscd-ace-editor-syntax-operator-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_invalid {
        color: var(
          --oscd-ace-editor-syntax-invalid-color,
          var(--md-sys-color-error, #b3261e)
        );
      }

      .ace-oscd .ace_variable.ace_parameter {
        font-style: italic;
        color: var(
          --oscd-ace-editor-syntax-parameter-color,
          var(--md-sys-color-secondary, #625b71)
        );
      }

      .ace-oscd .ace_comment {
        color: var(
          --oscd-ace-editor-syntax-comment-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_numeric,
      .ace-oscd .ace_constant.ace_numeric,
      .ace-oscd .ace_identifier {
        color: var(
          --oscd-ace-editor-syntax-number-color,
          var(--md-sys-color-on-surface, #1d1b20)
        );
      }

      .ace-oscd .ace_xml-pe {
        color: var(
          --oscd-ace-editor-syntax-operator-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_meta.ace_tag {
        color: var(
          --oscd-ace-editor-syntax-tag-color,
          var(--md-sys-color-secondary, #625b71)
        );
      }

      .ace-oscd .ace_string.ace_regex {
        color: var(
          --oscd-ace-editor-syntax-regex-color,
          var(--md-sys-color-error, #b3261e)
        );
      }

      .ace-oscd .ace_marker-layer .ace_selection {
        background: var(
          --oscd-ace-editor-selection-color,
          var(--md-sys-color-primary, #6750a4)
        );
        opacity: 0.2;
      }

      .ace-oscd .ace_marker-layer .ace_step {
        background: var(
          --oscd-ace-editor-step-color,
          var(--md-sys-color-secondary, #625b71)
        );
      }

      .ace-oscd .ace_marker-layer .ace_stack {
        background: var(
          --oscd-ace-editor-syntax-keyword-color,
          var(--md-sys-color-primary, #6750a4)
        );
      }

      .ace-oscd .ace_marker-layer .ace_bracket {
        margin: -1px 0 0 -1px;
        border: 1px solid
          var(
            --oscd-ace-editor-gutter-text-color,
            var(--md-sys-color-on-surface-variant, #49454f)
          );
      }

      .ace-oscd .ace_marker-layer .ace_active-line {
        background: var(
          --oscd-ace-editor-active-line-color,
          var(--md-sys-color-surface-container, #f3edf7)
        );
      }

      .ace-oscd .ace_gutter-active-line {
        background-color: var(
          --oscd-ace-editor-active-line-color,
          var(--md-sys-color-surface-container, #f3edf7)
        );
      }

      .ace-oscd .ace_marker-layer .ace_selected-word {
        background: var(
          --oscd-ace-editor-selection-color,
          var(--md-sys-color-primary, #6750a4)
        );
        opacity: 0.2;
        border: 1px solid
          var(
            --oscd-ace-editor-gutter-text-color,
            var(--md-sys-color-on-surface-variant, #49454f)
          );
      }

      .ace-oscd .ace_string {
        color: var(
          --oscd-ace-editor-syntax-string-color,
          var(--md-sys-color-on-surface, #1d1b20)
        );
      }

      .ace-oscd .ace_entity.ace_other.ace_attribute-name {
        color: var(
          --oscd-ace-editor-syntax-attribute-name-color,
          var(--md-sys-color-primary, #6750a4)
        );
      }

      .ace-oscd .ace_indent-guide {
        background: linear-gradient(
          to right,
          transparent 0,
          transparent calc(100% - 1px),
          var(
              --oscd-ace-editor-gutter-color,
              var(--md-sys-color-surface-container-low, #f7f2fa)
            )
            calc(100% - 1px),
          var(
              --oscd-ace-editor-gutter-color,
              var(--md-sys-color-surface-container-low, #f7f2fa)
            )
            100%
        );
      }

      .ace-oscd .ace_indent-guide-active {
        background: linear-gradient(
          to right,
          transparent 0,
          transparent calc(100% - 1px),
          var(
              --oscd-ace-editor-active-line-color,
              var(--md-sys-color-surface-container, #f3edf7)
            )
            calc(100% - 1px),
          var(
              --oscd-ace-editor-active-line-color,
              var(--md-sys-color-surface-container, #f3edf7)
            )
            100%
        );
      }

      .ace-oscd.ace_focus .ace_marker-layer .ace_selection {
        background: var(
          --oscd-ace-editor-selection-color,
          var(--md-sys-color-primary, #6750a4)
        );
        opacity: 0.24;
      }

      .ace-oscd .ace_bracket {
        color: var(
          --oscd-ace-editor-gutter-text-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        );
      }

      .ace-oscd .ace_fold {
        background: var(
          --oscd-ace-editor-syntax-keyword-color,
          var(--md-sys-color-primary, #6750a4)
        );
        border-color: transparent;
      }
    `;

    const dom = require as unknown as {
      (moduleName: 'ace/lib/dom'): {
        importCssString: (cssText: string, cssClass: string) => void;
      };
    };
    dom('ace/lib/dom').importCssString(exports.cssText, exports.cssClass);
  },
);

registerThemeInSettingsMenu();
