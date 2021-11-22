const shop = require('../pageobjects/shop');
const loginPage = require('../pageobjects/loginPage');
const expectchai = require('chai').expect;
const reviewPage = require('../pageobjects/reviewPage');
const loginData = require('../testData/testData.json');
describe('End2End Ecom application test', async () => {

    loginData.forEach(async ({ username, password, products: productsToClick }) => {
        console.log("*******->" + username, password);
        it("e2e add to cart and checkout", async () => {

            await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")

            await loginPage.login(username, password) //optimized pom 

            await shop.checkout.waitForDisplayed()
            await shop.addProductsToCart(productsToClick) //optimized 
            await shop.checkout.scrollIntoView()
            await shop.checkout.click()

            const totalCartProductsPricesRes = await reviewPage.totalCartProductsPrices()

            console.log(totalCartProductsPricesRes);

            const wepPageTotalValue = await reviewPage.sumOfAllProducts()

            expectchai(totalCartProductsPricesRes).to.be.equal(wepPageTotalValue)

            await reviewPage.checkoutGreenButton.click() //green button 
            await reviewPage.addressBox.setValue("ind")
            await reviewPage.loadingAnimation.waitForExist({ reverse: true }) //wait for loading animation to dissapear 
            await reviewPage.indiaLink.click() //indiaLink
            await reviewPage.purchaseButton.click() //purchase button
            await expect(reviewPage.successMessage).toHaveTextContaining("Success") //success message validate using wdio expect
        })
    })

})
