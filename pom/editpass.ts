import {Page} from "@playwright/test"

export default class Editpass{
    constructor(public page:Page){


    }

    async editpass(password:string,confirm:string){
        await this.page.locator("//a[normalize-space()='Password']").click()
await this.page.locator("//input[@placeholder='Password']").type(password)
await this.page.locator("//input[@placeholder='Password Confirm']").type(confirm)
await this.page.locator("//input[@value='Continue']").click()
    }
    async alert(){
        await this.page.locator("//div[@class='alert alert-success alert-dismissible']").isVisible()

    }
}