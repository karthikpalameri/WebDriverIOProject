const expectchai = require('chai').expect;
describe('Ecom Application tests 2', () => {
    xit('Ui controls Statis Drop down selection', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

        await $("[id='username']").setValue('rahulshettyacademy') //sendKeys    
        await $("#password").setValue('learning') //sendKeysf
        await $$('.customradio')[1].$('.radiotextsty').click()
        await $('.modal-body').waitForDisplayed() //wait 
        await $('#cancelBtn').click()
        expect(await $$('.customradio')[1].$('.radiotextsty')).toBeSelected() //isselected
        await $$('.customradio')[1].$('.radiotextsty').click()
        await $('.modal-body').waitForDisplayed() //wait
        await $('#okayBtn').click()

        await browser.pause(4000)

        const staticDropDownElemenet = await $('.form-group select.form-control')
        await staticDropDownElemenet.selectByAttribute('value', 'stud')
        await staticDropDownElemenet.selectByVisibleText('Teacher')
        await staticDropDownElemenet.selectByIndex(0)
        await browser.pause(2000)
        console.log(await staticDropDownElemenet.getValue());
        expectchai(await staticDropDownElemenet.getValue()).to.equal('stud') //chai expect 

    })

    xit('Ui controls Dynamic dropDown selection', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        await $('input#autocomplete').setValue('ind')

        await browser.pause(2000)

        const dynamicDropDown = await $$('.ui-menu-item div').filter(async item => await item.getText() == 'India')
        console.log("+-->" + await dynamicDropDown[0].click())

        await browser.pause(2000)


    })
    xit('Ui controls Select Check Box', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        let [firstCheckBox, secondCheckBox, thirdCheckBox] = await $$('label input[type=checkbox]')
        await secondCheckBox.click()
        console.log(await secondCheckBox.isSelected());
        expect(secondCheckBox).toBeSelected()
        await browser.pause(2000)

    })
})
