/*
 * Custom Ace theme that follows OpenSCD CSS theming variables
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
    | AceThemeListModule
    | undefined;

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
        background: var(--oscd-base2, #f3f5f6);
        color: var(--oscd-base00, #46505d);
        overflow: hidden;
      }

      .ace-oscd .ace_print-margin {
        width: 1px;
        background: var(--oscd-base2, #f3f5f6);
      }

      .ace-oscd {
        background-color: var(--oscd-base3, #ffffff);
        color: var(--oscd-base00, #46505d);
        font-family: var(--oscd-text-font-mono, 'Roboto Mono'), monospace;
      }

      .ace-oscd .ace_identifier {
        color: var(--oscd-base00, #46505d);
      }

      .ace-oscd .ace_keyword {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_numeric {
        color: var(--oscd-base00, #46505d);
      }

      .ace-oscd .ace_storage {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_keyword.ace_operator,
      .ace-oscd .ace_lparen,
      .ace-oscd .ace_rparen,
      .ace-oscd .ace_punctuation {
        color: var(--oscd-base01, #3d4651);
      }

      .ace-oscd .ace_set.ace_statement {
        color: var(--oscd-secondary, #0b335b);
        text-decoration: underline;
      }

      .ace-oscd .ace_cursor {
        color: var(--oscd-base00, #46505d);
      }

      .ace-oscd .ace_invisible {
        color: var(--oscd-base1, #96a1b0);
      }

      .ace-oscd .ace_constant.ace_buildin {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_constant.ace_language {
        color: var(--oscd-base01, #3d4651);
      }

      .ace-oscd .ace_constant.ace_library {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_invalid {
        background-color: var(--oscd-error, #dc322f);
        color: var(--oscd-base3, #ffffff);
      }

      .ace-oscd .ace_support.ace_function {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_support.ace_constant {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_class {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_support.ace_other {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_variable.ace_parameter {
        font-style: italic;
        color: var(--oscd-warning, #b58900);
      }

      .ace-oscd .ace_comment {
        color: var(--oscd-base01, #96a1b0);
      }

      .ace-oscd .ace_constant.ace_numeric {
        color: var(--oscd-base00, #46505d);
      }

      .ace-oscd .ace_variable {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_xml-pe {
        color: var(--oscd-base01, #3d4651);
      }

      .ace-oscd .ace_support.ace_storedprocedure {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_heading {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_list {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_marker-layer .ace_selection {
        background: var(--oscd-primary, #2485e5);
        opacity: 0.2;
      }

      .ace-oscd .ace_marker-layer .ace_step {
        background: var(--oscd-warning, #b58900);
      }

      .ace-oscd .ace_marker-layer .ace_stack {
        background: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_marker-layer .ace_bracket {
        margin: -1px 0 0 -1px;
        border: 1px solid var(--oscd-base1, #96a1b0);
      }

      .ace-oscd .ace_marker-layer .ace_active-line {
        background: var(--oscd-base2, #f3f5f6);
      }

      .ace-oscd .ace_gutter-active-line {
        background-color: var(--oscd-base2, #f3f5f6);
      }

      .ace-oscd .ace_marker-layer .ace_selected-word {
        background: var(--oscd-base3, #ffffff);
        border: 1px solid var(--oscd-base1, #96a1b0);
      }

      .ace-oscd .ace_meta.ace_tag {
        color: var(--oscd-secondary, #0b335b);
      }

      .ace-oscd .ace_string.ace_regex {
        color: var(--oscd-error, #dc322f);
      }

      .ace-oscd .ace_string {
        color: var(--oscd-base00, white);
      }

      .ace-oscd .ace_entity.ace_other.ace_attribute-name {
        color: var(--oscd-primary, #2485e5);
      }

      .ace-oscd .ace_indent-guide {
        background: linear-gradient(
          to right,
          transparent 0,
          transparent calc(100% - 1px),
          var(--oscd-base2, #f3f5f6) calc(100% - 1px),
          var(--oscd-base2, #f3f5f6) 100%
        );
      }

      .ace-oscd .ace_indent-guide-active {
        background: linear-gradient(
          to right,
          transparent 0,
          transparent calc(100% - 1px),
          var(--oscd-base1, #96a1b0) calc(100% - 1px),
          var(--oscd-base1, #96a1b0) 100%
        );
      }

      .ace-oscd.ace_focus .ace_marker-layer .ace_selection {
        background: var(--oscd-primary, #2485e5);
        opacity: 0.24;
      }

      .ace-oscd .ace_fold {
        background: var(--oscd-primary, #2485e5);
        border-color: transparent;
      }

      .ace-oscd .ace_bracket {
        color: var(--oscd-base01, #3d4651);
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
