require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
var chai = require('chai');
var assert = chai.assert;
// total itmes should be 0 itmes
driver.get('https://autowebtest.github.io/add-remove/');
driver.manage().window().maximize();
driver.findElement(By.css('body > div > div.reminder-container > footer > span')).getText().then(function (text) {
    console.log(text);
    return assert.equal(text, 0);
})

//delete All should be disable
driver.findElement(By.className('clear-all disabled')).getAttribute('disabled').then(function (bool) {
    console.log(bool);
    return assert.equal(bool, 'true');
})

driver.findElement(By.id('text')).sendKeys('good');
driver.findElement(By.id('text')).submit();

driver.sleep(1000);
driver.findElement(By.className('clear-all')).getAttribute('disabled').then(function (bool) {
    console.log(bool);
    return assert.equal(bool, null);
})