import {test , expect } from '@playwright/test'
test("create account",async({page})=>{
   await page.goto("https://login.salesforce.com")
   await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page .getByRole("button",{name:"Log In"}).click()    
    await expect(page).toHaveTitle('Lightning Experience')
console.log("URL" + await page.url());
await page.locator('.slds-icon-waffle').click()
await page.getByText(/View All/).and(page.locator("button")).click()

//await page.getByText("View All").click()
await page.getByPlaceholder("Search apps or items...").fill('Service')
//await page.locator("//div[@class='slds-truncate'][1]").click()
 await page.locator("(//p[@class='slds-truncate'])[1]").click()

await page.click("//span[text()='Accounts']")
await page.getByRole('button', { name: 'New' }).click()
await page.locator("//input[@name='Name']").fill("Mugil")
await page.locator("//button[@name='SaveEdit']").click()
const message = await page.locator("//span[contains(@class,'toastMessage')]").textContent()


})