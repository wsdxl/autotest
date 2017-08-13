require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;

var driver= new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://localhost:4000/');
driver.findElement(By.css('#main-nav > a:nth-child(2)')).click();
driver.findElement(By.xpath('//*[@id="main-nav"]/a[3]')).click();