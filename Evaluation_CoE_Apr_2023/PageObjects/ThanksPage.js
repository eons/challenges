const {expect}= require('@playwright/test');
const { BasePage } = require('./BasePage');
const { fs, existsSync, createReadStream }= require('node:fs');
//const exp = require('node:constants');
const { parse }= require('csv-parse');
//const { error } = require('node:console');

class ThanksPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        this.page= _page;
        this.thanksLetter= _page.locator(".hero-primary");
        this.orderIdContainer= _page.locator("tbody .ng-star-inserted .em-spacer-1");
        this.ordersHistoryPageHyperlink= _page.locator(".em-spacer-1 [routerlink= '/dashboard/myorders']");
        this.csvOrderDetailsButton= _page.locator("//button[contains(text(), 'Click To Download Order Details in CSV')]");
    }

    async getOrderIds()
    {
        await expect(this.thanksLetter).toHaveText(" Thankyou for the order. ");
        let listOfOrderIds= [];
        let cleanOrderId;
        let countOrderIds= await this.orderIdContainer.locator("label").count();
        console.log("Number of orderIds: " + countOrderIds);
        for(let i= 0; i<countOrderIds; ++i)
        {
            cleanOrderId= await this.orderIdContainer.locator("label").nth(i).textContent();
    
            cleanOrderId= await cleanOrderId.split('|');
            cleanOrderId= cleanOrderId[1];
            cleanOrderId= await cleanOrderId.trim();
            listOfOrderIds.push(cleanOrderId);
        }
        //console.log("List: " + listOfOrderIds);
    }

    async downloadCSVOrderDetails()
    {
        const downloadPromise = this.page.waitForEvent('download');
        await this.csvOrderDetailsButton.click();
        const download = await downloadPromise;
        await download.suggestedFilename();
        await download.saveAs('C:/Users/josue/Downloads/EvaluationCSV/order-invoice_eons.csv');
        //console.log(await download.path());
        expect(await this.isFileCorrectlyDownloaded()).toBeTruthy();
    }

    async isFileCorrectlyDownloaded()
    {
        console.log("I was here 1");
        let path= 'C:/Users/josue/Downloads/EvaluationCSV/order-invoice_eons.csv';
        if(existsSync(path) && path.length != 0)
        {
            return true;
        }else{return false;}
    }

    async readCSVFileAndGetArrayWithinfo()
    {
        const results = [];

        createReadStream('C:/Users/josue/Downloads/EvaluationCSV/order-invoice_eons.csv')
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
        results.push(row);
        })
        .on("error", function (error) {
        console.log(error.message);
        })
        .on("end", function () {
        console.log(results);
        });
        console.log(results);
    }
}
module.exports= {ThanksPage};