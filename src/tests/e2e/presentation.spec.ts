import { test, expect } from '@playwright/test';

test('has security headers for SharedArrayBuffer', async ({ page }) => {
  const response = await page.goto('/');
  const headers = response?.headers();
  
  expect(headers?.['cross-origin-opener-policy']).toBe('same-origin');
  expect(headers?.['cross-origin-embedder-policy']).toBe('require-corp');
});

test('renders initial slide', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Neural Dynamics')).toBeVisible();
});

