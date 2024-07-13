const FormPage = require("./../po/pages/form.page");
const ResultPage = require("./../po/pages/result.page");
describe('Pastebin', () => {
    let page;
    let resultPage;

    beforeEach(async () => {
        page = new FormPage()
        resultPage = new ResultPage()
        await page.open()

    })
    it('Pastebin steps', async () => {
        await page.newFormBtn.click()
        await page.form.input('text').setValue('Hello from WebDriver')
        await page.selectExpiration("10 Minutes");
        await page.form.input('title').setValue('helloweb')
        await page.form.submitBtn.click()


        const textResult = await resultPage.getResultItem('text');
        const expirationResult = await resultPage.getResultItem('expiration');
        const titleResult = await resultPage.getResultItem('title');

        await $('.post-create').waitForExist({ timeout: 5000 })

        expect(await textResult.getText()).isEqual('Hello from WebDriver');
        expect(await expirationResult.getText()).isEqual('10 MIN');
        expect(await titleResult.getText()).isEqual('helloweb');
    })
})
