import { CustomWorld } from './../../hooks/world';
import {Given, When, Then} from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";
let browser: Browser;
// let page: Page;
Given('User navigates to the application',{timeout:30000}, async function (this:CustomWorld) {
  browser = await chromium.launch({headless:false});
  this.page = await browser.newPage();
  await this.page.goto("https://bookcart.azurewebsites.net/");
});

Given('User click on the login link', async function (this:CustomWorld) {
  await this.page.locator("//span[normalize-space()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
  await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
});

Given('User enter the password as {string}', async function (password) {
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
});

When('User click on the login button', async function (this:CustomWorld) {
  await this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
});

Then('Login should be success',async function(this:CustomWorld){
  await expect(this.page.locator("//span[contains(text(),'samiha')]")).toBeVisible();
  await browser.close();
});

When('user click on the login button', async function (this:CustomWorld) {
  await this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
});

Then('Login should fail', async function (this:CustomWorld) {
  const failure = this.page.getByText('Password is required');
  await expect(failure).toHaveText("Password is required");
  await browser.close();
});