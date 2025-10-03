/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './material-collection.js';
import './index.js';

import {
  MaterialCollection,
  KnobTypesToKnobs,
  materialInitsToStoryInits,
  setUpDemo,
} from 'utils/storybook/stories/material-collection.js';
import { stories, StoryKnobs } from './stories.js';
import { Knob, boolInput, textInput } from 'utils/storybook/stories/knobs.js';

const collection = new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>(
  'Icon Button',
  [
    new Knob('disabled', { ui: boolInput(), defaultValue: false }),
    new Knob('icon', { ui: textInput(), defaultValue: '' }),
    new Knob('selectedIcon', { ui: textInput(), defaultValue: '' }),
    new Knob('softDisabled', { ui: boolInput(), defaultValue: false }),
  ],
);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection as unknown as MaterialCollection);
