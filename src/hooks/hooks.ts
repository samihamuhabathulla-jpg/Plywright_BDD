import { Before, After, Status,setDefaultTimeout,} from "@cucumber/cucumber";
import {chromium,Browser,Page} from "@playwright/test";
import {CustomWorld} from "./world";
setDefaultTimeout(60000);
let browser: Browser;
Before(async function(this:CustomWorld){
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
After(async function(this:CustomWorld,{pickle,result}){
    console.log(result?.status);
    if(result?.status == Status.FAILED){
        const img = await this.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(img,"image/png");
    }
    await this.page.close();
    await this.browser.close();
})