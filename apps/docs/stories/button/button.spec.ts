import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
	await page.goto("http://localhost:6006/iframe.html?id=button--secondary&viewMode=story");
	await expect(page).toHaveScreenshot("../common/button.png");
});
