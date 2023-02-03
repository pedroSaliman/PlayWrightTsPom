import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import Register from '../pom/register';
import Login from '../pom/login';
import Edit from '../pom/edit';
import Editpass from '../pom/editpass';
import Search from '../pom/search';
import * as data from "../data/data.json"
const email = faker.internet.email()
test.describe("POM",async ()=>{
  
   
test("Register",async({page})=>{


const reg= new Register(page)
await reg.go()
await reg.register(data.fname,data.last,email,data.tele,data.password,data.conpass)
await expect(reg.message()).toBeTruthy()
//////////////////////////////////////////////
const login= new Login(page)
await login.login(email,data.password)
await expect(login.themessage()).toBeTruthy()
////////////////////
const edit = new Edit(page)
await edit.editinfo(data.name)
await expect(edit.alert()).toBeTruthy()
////////////////////////////////////////
const editpass=new Editpass(page)
await editpass.editpass(data.anotherpass,data.anotherpass)
await expect(editpass.alert()).toBeTruthy()
//////////////////////////////////////////
const search=new Search(page)
await search.searchtocompare(data.product,data.another)



})

})