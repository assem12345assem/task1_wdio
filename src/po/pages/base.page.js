class BasePage {
    constructor(url) {
        this.url = url;
    }
    open(url) {
        return browser.url(this.url)
    }
    get rootEl() {
        return this.url;
    }
}
module.exports = BasePage