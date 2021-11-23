const { login } = require("../pageobjects/loginPage");
const loginPage = require("../pageobjects/loginPage");

describe('Ecommerce Application', async() => {//test suite
    it("Login page title",
        async () => {
            console.log('login page title ');
            await browser.maximizeWindow()
            await browser.url("/loginpagePractise/")
            console.log(await browser.getTitle());
            await expect(browser).toHaveTitleContaining('Practise')

            // const input = $("[id='username']")
            // await input.setValue('tempValue1') //sendKeys
            // await $("#password").setValue('temppwd1') //sendKeys
            await loginPage.login("rahulshettyacademy","learning") //optimized pom
            console.log(await loginPage.alertBox.getText() + "<-i am seeing on screen") //getText()
            await loginPage.signInButton.click() //click
            await loginPage.signInButton.getAttribute("value") === "Sign In"

            browser.waitUntil(async () => (await loginPage.signInButton.getAttribute("value") === "Sign In"), { timeout: 4000, timeoutMsg: 'expected text did not appear after 4s' })
            await loginPage.alertBox.scrollIntoView()
            console.log(await loginPage.alertBox.getHTML(true) + "<-i am seeing on screen after ") //getText()

            expect(await loginPage.textInfo.getText()).toHaveTextContaining("Password is learning")


            // await browser.pause(5000)
            await browser.closeWindow()

        })

    xit("Login successfull check", async () => {
        await browser.maximizeWindow()
        await browser.url("/loginpagePractise/")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Practise')


        await $("[id='username']").setValue('rahulshettyacademy') //sendKeys    
        await $("#password").setValue('learning') //sendKeys

        await $(".btn.btn-info").click()
        // browser.waitUntil(async()=>await $('nav-link btn btn-primary').isDisplayed===true,{timeout:5000,timeoutMsg:"waited 5s for checkout"})
        console.log($("*=Checkout").waitForExist());
        await expect(browser).toHaveTitleContaining('ProtoCommerce')
        browser.pause(5000)
        await expect(browser).toHaveUrlContaining('shop')
    })
})
