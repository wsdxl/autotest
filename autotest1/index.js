require('chromedriver'); //导入chrome浏览器
var webdriver = require('selenium-webdriver');// 导入selenium库
By = webdriver.By;
until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();//创建一个chrome浏览器实例

driver.get('https://autowebtest.github.io/myself/');//打开首页
driver.sleep(5 * 1000).then(function () {
    return driver.findElement(By.css('body > div.wrapper > header > a')).click();//点击首页左方的列表按钮
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(1) > a')).click();//点击‘HOME’书签

driver.sleep(5 * 1000).then(function () {
    return driver.findElement(By.css('body > div.wrapper > header > a')).click();//点击首页左方的列表按钮
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(2) > a')).click();//点击‘ABOUT ME’书签

driver.sleep(5 * 1000).then(function () {
    return driver.findElement(By.css('body > div.wrapper > header > a')).click();//点击首页左方的列表按钮
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(3) > a')).click();//点击‘MY WORKS’书签

driver.sleep(5 * 1000).then(function () {
    return driver.findElement(By.css('body > div.wrapper > header > a')).click();//点击首页左方的列表按钮
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(4) > a')).click();//点击‘CONTACT’书签

driver.sleep(5 * 1000).then(function () {
    return driver.quit();                //退出浏览器
})