const BasePage = require('./base.page')
const FormComponent = require('./../components/form.component')

class FormPage extends BasePage {
    constructor() {
        super('/');
        this.form = new FormComponent();
    }

    get newFormBtn() {
        return $('.header__btn')
    }

    async selectExpiration(value) {
        await this.form.input('expiration').click();
        const optionSelector = `//li[contains(@class, 'select2-results__option') and text()="${value}"]`;
        const option = await $(optionSelector);
        await option.click();
    }
}

module.exports = FormPage;