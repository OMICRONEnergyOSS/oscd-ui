/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './material-collection.js';
import './index.js';

import {
  KnobTypesToKnobs,
  MaterialCollection,
  materialInitsToStoryInits,
  setUpDemo,
} from 'utils/storybook/stories/material-collection.js';
import { boolInput, Knob } from 'utils/storybook/stories/index.js';

import { stories, StoryKnobs } from './stories.js';

const collection = new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>(
  'Radio',
  [new Knob('disabled', { ui: boolInput(), defaultValue: false })],
);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection as unknown as MaterialCollection);
