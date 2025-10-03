/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/* This is a PoC unit test.
 * Purpose was to show how we can copy 1:1 the tests from Material Web Components
 * and use them for our custom elements.
 * This has been left in place as an example of how its done.
 */

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ButtonHarness } from './harness.js';
import { Environment } from '../testing/environment.js';

import { OscdFilledButton as Button } from './OscdFilledButton.js';

@customElement('test-button')
class TestButton extends Button {}

describe('Button', () => {
  const env = new Environment();

  async function setupTest() {
    const button = new TestButton();
    env.render(html`${button}`);
    await env.waitForStability();
    return { button, harness: new ButtonHarness(button) };
  }

  it('should not be focusable when disabled', async () => {
    // Arrange
    const { button } = await setupTest();
    button.disabled = true;
    await env.waitForStability();

    // Act
    button.focus();

    // Assert
    expect(document.activeElement)
      .withContext('disabled button should not be focused')
      .not.toBe(button);
  });

  it('should be focusable when soft-disabled', async () => {
    // Arrange
    const { button } = await setupTest();
    button.softDisabled = true;
    await env.waitForStability();

    // Act
    button.focus();

    // Assert
    expect(document.activeElement)
      .withContext('soft-disabled button should be focused')
      .toBe(button);
  });

  it('should not be clickable when disabled', async () => {
    // Arrange
    const clickListener = jasmine.createSpy('clickListener');
    const { button } = await setupTest();
    button.disabled = true;
    button.addEventListener('click', clickListener);
    await env.waitForStability();

    // Act
    button.click();

    // Assert
    expect(clickListener).not.toHaveBeenCalled();
  });

  it('should not be clickable when soft-disabled', async () => {
    // Arrange
    const clickListener = jasmine.createSpy('clickListener');
    const { button } = await setupTest();
    button.softDisabled = true;
    button.addEventListener('click', clickListener);
    await env.waitForStability();

    // Act
    button.click();

    // Assert
    expect(clickListener).not.toHaveBeenCalled();
  });
});
