const { BasePage } = require("./BasePage");

class OrdersPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        this.tbodyContainer= _page.locator("tbody[_ngcontent-okn-c38]");
        this.genericViewButton= _page.locator(".btn.btn-primary");
        this.genericDeleteButton= _page.locator(".btn.btn-danger");
    }

    async lookingForOrderIdInTableRows(_orderIdsArraylist)
    {
        let row= this.tbodyContainer.locator("tr");
        let countRows= row.count();
        let countTds= row.locator("td").count();
        let arrayRowData= [];

        for(let i= 0; i< _orderIdsArraylist.length; ++i)
        {
            for(let j= 0; j< countRows; ++i)
            {
                if(row.locator("th").textContent() == _orderIdsArraylist[i])
                {
                    for(let k= 0; k< countTds; ++i)
                    {
                        arrayRowData.push(row.locator("td").nth(k).textContent());
                    }
                }
            }
        }
        console.log(arrayRowData);
    }
}
module.exports= {OrdersPage};