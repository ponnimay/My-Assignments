import {test,expect} from "@playwright/test";

test("createlead", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
     await page.locator("[id='username']").fill("Demosalesmanager")
        await page.locator("[id='password']").fill("crmsfa")
        await page.locator("[class='decorativeSubmit']").click()
        await page.locator("text='CRM/SFA'").click()
        await page.locator("text='Leads'").click()
     await page.getByRole('link',{name: 'Create Lead'}).click()
     await page.locator("[id='createLeadForm_companyName']").fill("Export company")
     await page.locator("[id='createLeadForm_firstName']").fill("Karthick")
     await page.locator("[id='createLeadForm_lastName']").fill("N")
     await page.locator("[id='createLeadForm_personalTitle']").fill("Mr")
     await page.locator("[id='createLeadForm_generalProfTitle']").fill("Automation tester")
     await page.locator("[id='createLeadForm_annualRevenue']").fill("100000")
     await page.locator("[id='createLeadForm_departmentName']").fill("Testing")
     await page.locator("[id='createLeadForm_primaryPhoneNumber']").fill("9078567890")
     //await page.locator("[id='ext-gen714']").click
         //await page.locator("//a[text()='Leads']").click()
        await page.locator("[class='smallSubmit']").click()

//just to verify the created lead details
 /* const companyname = await page.locator ("#viewLead_companyName_sp").textContent()
    const firstName = await page.locator ("#viewLead_firstName_sp"). textContent()
    const lastName = await page.locator ("#viewLead_lastName_sp"). textContent()
    const status = await page.locator ("#viewLead_statusId_sp"). textContent()
    console.log("Company name: " +companyname+"\n" +"First Name: " +firstName+ "\n"+"Last Name: " +lastName+ "\n"+"Status: " +status)
    const title = await page.title()
    console.log("Title: " +title) */

//Assertions to verify the created lead details
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Export");
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Karthick");
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText("N");
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned");

    console.log("Page Title : "+page.title);

})
