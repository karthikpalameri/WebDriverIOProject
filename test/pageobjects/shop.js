class Shop {

    get checkout() {
        return $("*=Checkout")
    }
    get cards() {
        return $$(".col-lg-3.col-md-6")
    }
    async addProductsToCart(productsToClick) {
        await this.cards
            .filter(async card => productsToClick.includes(await card.$("div h4 a").getText()))
            .map(async item => await item.$(".card-footer button").click())
    }
}

module.exports = new Shop()