const expectchai = require('chai').expect;
describe('Functional testing on application', () => {
    it('Scrolling till element',async() =>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").waitForClickable()

        await $("#mousehover").scrollIntoView()
        await $("#mousehover").moveTo()
        await $("=Top").click()
        await browser.url("http://only-testing-blog.blogspot.com/")
         let [doubleClickElement] = await $$('[dir="ltr"] button')
         await doubleClickElement.scrollIntoView()
        console.log("-->"+await doubleClickElement.getText())
        await doubleClickElement.doubleClick()
        console.log(await browser.isAlertOpen())
        expectchai(await browser.isAlertOpen()).to.be.true

        console.log(await browser.getAlertText())
        expectchai(await browser.getAlertText()).to.be.equal("Press 'OK' or 'Cancel' button!")
        console.log("debuggggg test");
        browser.acceptAlert()
        
        await browser.pause(2000)
        
    })
    
})
