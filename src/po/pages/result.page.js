

const BasePage = require('./base.page')
const ResultComponent = require("../components/result.component");

class ResultPage extends BasePage{
    constructor() {
        super('')
        this.resultComponent = new ResultComponent();
    }
    async getResultItem(name) {
        return await this.resultComponent.items(name);
    }
}
module.exports = ResultPage;