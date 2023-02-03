import {Page} from "@playwright/test"

export default class Search{
    constructor(public page:Page){

    }

    async searchtocompare(product:string,another:string){
        await  this.page.locator("//input[@placeholder='Search']").type(product)
await  this.page.keyboard.press("Enter")


await this.page.locator("//button[@data-original-title='Compare this Product']").click()
await this.page.locator("//a[normalize-space()='product comparison']").click()


await this.page.locator("//input[@placeholder='Search']").type(another)
await this.page.keyboard.press("Enter")


await this.page.locator("//button[@data-original-title='Compare this Product']").click()
await this.page.locator("//a[normalize-space()='product comparison']").click()
    }
}