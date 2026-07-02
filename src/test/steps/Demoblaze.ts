import {Given, When, Then} from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";
let browser:Browser;
let page:Page;

Given('the user is on demoblaze site', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
});

When('the user tries to login with valid credentials by clicking login', async function () {
    await page.getByRole('link', { name: 'Log in' }).click();
});

When('the user enters username as {string}', async function (username) {
    await page.locator('#loginusername').fill(username)
});

When('the user enters password as {string} and clicks login button', async function (password) {
    await page.locator('#loginpassword').fill(password);
    await page.getByRole('button', { name: 'Log in' }).click();
});

Then('the user should naviagte to the products page successfully', async function () {
    // await expect(page.locator("//a[@id='nameofuser']")).toBeVisible();
    browser.close();
});