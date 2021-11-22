class ReviewPage {

    get productPrices() {
        return $$("tbody tr td:nth-child(4) strong")
    }
    get totalPrice() {
        return $("tbody tr td:nth-child(5) h3 strong")
    }
    get checkoutGreenButton() {
        return $(".btn.btn-success")
    }
    get addressBox() {
        return $(".filter-input")
    }
    get loadingAnimation(){
       return  $("div .lds-ellipsis")
    }
    get indiaLink(){
        return $("=India")
    }
    get purchaseButton(){
        return $("input.btn-success")
    }
    get successMessage(){
        return $('div.alert-success')
    }
    async totalCartProductsPrices() {
        const cartProductsPrices = await this.productPrices.map(async price => {
            return parseInt(
                (await price.getText()).split(".")[1].trim()
            )
        })
        console.log("cartProductsPrices-->" + cartProductsPrices);
        const totalCartProductsPricesRes = cartProductsPrices.reduce((acc, currentVal) => acc + currentVal, 0)
        console.log(totalCartProductsPricesRes)
        return totalCartProductsPricesRes
    }

    async sumOfAllProducts() {
        const wepPageTotalValue = parseInt((await this.totalPrice.getText()).split(".")[1].trim())
        console.log(wepPageTotalValue);
        return wepPageTotalValue
    }
}

module.exports = new ReviewPage()