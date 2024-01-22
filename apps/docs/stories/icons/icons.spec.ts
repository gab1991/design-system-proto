import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
	await page.goto("http://localhost:6006/iframe.html?args=&id=icons--general&viewMode=story");
	await expect(page).toHaveScreenshot("../common/icons.png");
});
