import { expect, test } from '@playwright/test';

test.describe('public site smoke', () => {
  test('homepage renders and navigates to watch', async ({ page }) => {
    test.skip(test.info().project.name !== 'chromium', 'Desktop nav coverage only.');

    await page.goto('/');

    await expect(page).toHaveTitle(/True Light Baptist Church/);
    await expect(page.getByRole('heading', { name: /Worship in His light/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Plan Your Visit/i }).first()).toBeVisible();

    await page.getByRole('link', { name: /^Watch$/ }).click();

    await expect(page).toHaveURL(/\/watch$/);
    await expect(page.getByRole('heading', { name: /Worship live/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Watch on Facebook/i })).toHaveAttribute(
      'href',
      'https://www.facebook.com/TLBCofBR',
    );
  });

  test('mobile menu opens and routes to ministries', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile-chrome', 'Mobile drawer coverage only.');

    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /Open menu/i });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    await expect(page.getByRole('button', { name: /Close menu/i })).toBeVisible();

    await page.getByRole('link', { name: /^Ministries$/ }).click();

    await expect(page).toHaveURL(/\/ministries$/);
    await expect(page.getByRole('heading', { name: /A ministry for every/i })).toBeVisible();
  });
});
