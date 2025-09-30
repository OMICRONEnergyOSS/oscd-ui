/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import 'utils/storybook/stories/material-collection.js';
import 'utils/storybook/stories/index.js';

import { stories, StoryKnobs } from './stories.js';
import {
  MaterialCollection,
  KnobTypesToKnobs,
  materialInitsToStoryInits,
  setUpDemo,
} from 'utils/storybook/stories/material-collection.js';

const collection = new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>(
  'Cards',
  [],
);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection);
