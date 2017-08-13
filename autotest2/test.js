require('chromedriver');

var webdriver = require('selenium-webdriver');
var By =webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();

var arr = ["test3", "test2","test01"];


for(var i=0; i<3; i++){
   driver.get("http://localhost:4000");
   driver.findElement(By.id("nav-search-btn")).click();
   driver.findElement(By.name("q")).sendKeys(arr[i]); 
}