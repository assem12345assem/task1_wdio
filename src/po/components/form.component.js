const BaseComponent = require('./base.component')

class FormComponent extends BaseComponent {
    constructor() {
        super('.post-form');
    }

    get submitBtn() {
        return this.rootEl.$('.-big')
    }
    input(name) {
        const selectos = {
            text: '[id="postform-text"]',
            expiration: '.field-postform-expiration .select2-selection',
            title: '[id="postform-name"]',
        }
        return this.rootEl.$(selectos[name.toLowerCase()])
    }

}
module.exports = FormComponent;