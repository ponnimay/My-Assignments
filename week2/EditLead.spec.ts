import test from '@playwright/test'

test("Edit lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
     await page.locator("[id='username']").fill("Demosalesmanager")
        await page.locator("[id='password']").fill("crmsfa")
        await page.locator("[class='decorativeSubmit']").click()
        await page.locator("text='CRM/SFA'").click()
        await page.locator("text='Leads'").click()

       // await page.locator("text='Find Leads'").click()
       await page.getByRole('link', { name: 'Find Leads' }).click()
        await page.locator('div.x-grid3-cell-inner.x-grid3-col-partyId a').first().click()
           //await page.getByRole('link',{name: 'Edit'}).click()
        await page.locator("text='Edit'").click()

        await page.locator("[id='updateLeadForm_companyName']").fill("Phrama company")
        await page.locator("[id='updateLeadForm_annualRevenue']").fill("1000000")
        await page.locator("[id='updateLeadForm_departmentName']").fill("QE")
        await page.locator("[id='updateLeadForm_description']").fill("Playwright automation tester")

//await page.locator("[class='smallSubmit']").click()
// await page.getByRole('link', { name: 'Update' }).click()
await page.locator("text='Update'").click()
    const companyname = await page.locator ("#viewLead_companyName_sp").textContent()
    const Revenue = await page.locator ("#viewLead_annualRevenue_sp"). textContent()
    const department = await page.locator ("#viewLead_departmentName_sp"). textContent()
    const description = await page.locator ("#viewLead_description_sp"). textContent()
    const title = await page.title()
    console.log("Company name: " +companyname+"\n" +"Revenue: " +Revenue+ "\n"+"Department: " +department+ "\n"+"Description: " +description)
    console.log("Title: " +title)


})