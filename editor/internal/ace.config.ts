import 'ace-builds/src-min-noconflict/ace';

import 'ace-builds/src-min-noconflict/mode-xml.js';
import 'ace-builds/src-min-noconflict/ext-searchbox.js';
// Import order is important here: ext-themelist needs to be imported before our ace-theme-oscd,
// so that the OpenSCD theme is registered in Ace's theme list before we set it as default.
// ext-settings menu should not be imported before ace-theme-oscd, as it initializes the settings menu with the themes
import 'ace-builds/src-min-noconflict/ext-themelist.js';
import './ace-theme-oscd.js';
import 'ace-builds/src-min-noconflict/ext-settings_menu.js';
import 'ace-builds/src-min-noconflict/theme-ambiance.js';
import 'ace-builds/src-min-noconflict/theme-chaos.js';
import 'ace-builds/src-min-noconflict/theme-chrome.js';
import 'ace-builds/src-min-noconflict/theme-cloud9_day.js';
import 'ace-builds/src-min-noconflict/theme-cloud9_night.js';
import 'ace-builds/src-min-noconflict/theme-cloud9_night_low_color.js';
import 'ace-builds/src-min-noconflict/theme-cloud_editor.js';
import 'ace-builds/src-min-noconflict/theme-cloud_editor_dark.js';
import 'ace-builds/src-min-noconflict/theme-clouds.js';
import 'ace-builds/src-min-noconflict/theme-clouds_midnight.js';
import 'ace-builds/src-min-noconflict/theme-cobalt.js';
import 'ace-builds/src-min-noconflict/theme-crimson_editor.js';
import 'ace-builds/src-min-noconflict/theme-dawn.js';
import 'ace-builds/src-min-noconflict/theme-dreamweaver.js';
import 'ace-builds/src-min-noconflict/theme-dracula.js';
import 'ace-builds/src-min-noconflict/theme-eclipse.js';
import 'ace-builds/src-min-noconflict/theme-github.js';
import 'ace-builds/src-min-noconflict/theme-github_dark.js';
import 'ace-builds/src-min-noconflict/theme-github_light_default.js';
import 'ace-builds/src-min-noconflict/theme-gob.js';
import 'ace-builds/src-min-noconflict/theme-gruvbox.js';
import 'ace-builds/src-min-noconflict/theme-gruvbox_dark_hard.js';
import 'ace-builds/src-min-noconflict/theme-gruvbox_light_hard.js';
import 'ace-builds/src-min-noconflict/theme-idle_fingers.js';
import 'ace-builds/src-min-noconflict/theme-iplastic.js';
import 'ace-builds/src-min-noconflict/theme-katzenmilch.js';
import 'ace-builds/src-min-noconflict/theme-kr_theme.js';
import 'ace-builds/src-min-noconflict/theme-kuroir.js';
import 'ace-builds/src-min-noconflict/theme-merbivore.js';
import 'ace-builds/src-min-noconflict/theme-merbivore_soft.js';
import 'ace-builds/src-min-noconflict/theme-mono_industrial.js';
import 'ace-builds/src-min-noconflict/theme-monokai.js';
import 'ace-builds/src-min-noconflict/theme-nord_dark.js';
import 'ace-builds/src-min-noconflict/theme-one_dark.js';
import 'ace-builds/src-min-noconflict/theme-pastel_on_dark.js';
import 'ace-builds/src-min-noconflict/theme-solarized_dark.js';
import 'ace-builds/src-min-noconflict/theme-solarized_light.js';
import 'ace-builds/src-min-noconflict/theme-sqlserver.js';
import 'ace-builds/src-min-noconflict/theme-terminal.js';
import 'ace-builds/src-min-noconflict/theme-textmate.js';
import 'ace-builds/src-min-noconflict/theme-tomorrow.js';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night.js';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_blue.js';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_bright.js';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_eighties.js';
import 'ace-builds/src-min-noconflict/theme-twilight.js';
import 'ace-builds/src-min-noconflict/theme-vibrant_ink.js';
import 'ace-builds/src-min-noconflict/theme-xcode.js';

window.ace.config.setModuleUrl(
  'ace/mode/xml_worker',
  new URL('../ace/worker-xml.js', import.meta.url).toString(),
);

type AceSettingsMenuModule = {
  init: () => void;
};

const settingsMenu = window.ace?.require?.('ace/ext/settings_menu') as
  | AceSettingsMenuModule
  | undefined;
settingsMenu?.init();
