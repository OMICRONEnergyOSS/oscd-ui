/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './material-collection.js';
import './index.js';

import { stories, StoryKnobs } from './stories.js';
import { Knob, boolInput, textInput } from 'utils/storybook/stories/knobs.js';
import {
  MaterialCollection,
  KnobTypesToKnobs,
  materialInitsToStoryInits,
  setUpDemo,
} from 'utils/storybook/stories/material-collection.js';

const collection = new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>(
  'List',
  [
    new Knob('disabled', { ui: boolInput(), defaultValue: false }),
    new Knob('overline', { ui: textInput() }),
    new Knob('trailingSupportingText', { ui: textInput() }),
    new Knob('leadingIcon', { ui: boolInput() }),
    new Knob('trailingIcon', { ui: boolInput() }),
  ],
);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection as unknown as MaterialCollection);
