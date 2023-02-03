import {Page} from "@playwright/test"

export default class Register{
    constructor(public page:Page){

    }
async go(){
  await this.page.goto("https://naveenautomationlabs.com/opencart/")

}
  async  register(fname:string,lname:string,email:string,tele:string,password:string,conpass:string){
    await this.page.locator("//span[normalize-space()='My Account']").click()
    await this.page.locator("//a[normalize-space()='Register']").click()
    await this.page.locator("//input[@id='input-firstname']").type(fname)
    await this.page.locator("//input[@id='input-lastname']").type(lname)
    await this.page.locator("//input[@id='input-email']").type(email)
    await this.page.locator("//input[@id='input-telephone']").type(tele)
    await this.page.locator("//input[@id='input-password']").type(password)
    await this.page.locator("//input[@id='input-confirm']").type(conpass)
    await this.page.locator("//label[normalize-space()='Yes']").click()
    await this.page.locator("//input[@name='agree']").click()
    await this.page.locator("//input[@value='Continue']").click()
}
async message(){
  await this.page.locator("//h1[normalize-space()='Your Account Has Been Created!']").isVisible()
}
}