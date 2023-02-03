import {Page} from "@playwright/test"

export default class Edit{
    constructor(public page:Page){

    }


async editinfo(username:string){
    await this.page.locator("//a[normalize-space()='Edit Account']").click()
await this.page.locator("//input[@id='input-firstname']").type(username)
await this.page.locator("//input[@value='Continue']").click()

}
async alert(){
    await this.page.locator("//div[@class='alert alert-success alert-dismissible']").isVisible()

}
}