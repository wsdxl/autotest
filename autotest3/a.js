require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://autowebtest.github.io/add-remove/index.html');
driver.manage().window().maximize();
driver.findElement(By.css('#text')).clear();
driver.findElement(By.css('#text')).sendKeys('天堂');
driver.findElement(By.xpath('//*[@id="input-form"]/input[2]')).submit();
driver.findElement(By.css('#text')).sendKeys('地球');
driver.findElement(By.xpath('//*[@id="input-form"]/input[2]')).click();
driver.findElement(By.css('#text')).sendKeys('环境');
driver.findElement(By.xpath('//*[@id="input-form"]/input[2]')).submit();
driver.findElement(By.css('#text')).sendKeys('中国心');
driver.findElement(By.xpath('//*[@id="input-form"]/input[2]')).submit();
driver.findElement(By.css('#text')).sendKeys('三国');
driver.findElement(By.xpath('//*[@id="input-form"]/input[2]')).submit();
driver.findElements(By.className("new-item")).then(function (a) {
    console.log("number of items: ", a.length);
})
driver.findElement(By.css('body > div > div.reminder-container > footer > span')).getText().then(function (text) {
    console.log('text:', text)
})

driver.takeScreenshot().then(function (screen) {
    require('fs').writeFile('b.png', screen, 'base64');

})