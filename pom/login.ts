import {Page} from "@playwright/test"

export default class Login{
    constructor(public page:Page){

    }

async login(username:string,password:string){
    await this.page.locator("//span[normalize-space()='My Account']").click()
await this.page.locator("//a[normalize-space()='Logout']").nth(0).click()
await this.page.locator("//span[normalize-space()='My Account']").click()
await this.page.locator("//a[normalize-space()='Login']").nth(0).click()


await this.page.locator("#input-email").type(username)
await this.page.locator("#input-password").type(password)
await this.page.locator("input[value='Login']").click()
}
async themessage(){
    this.page.locator("//h2[normalize-space()='My Account']").isVisible()
}
}