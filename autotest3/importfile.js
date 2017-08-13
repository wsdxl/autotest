require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://autowebtest.github.io/add-remove/index.html');
driver.manage().window().maximize();
// var data = require('./data.json'); //导入json文件

// for (var info of data.info) {                 //用循环遍历
//     driver.findElement(By.id('text')).sendKeys(info);
//     driver.findElement(By.id('text')).submit();

// }


var yaml = require('js-yaml');
var fs = require('fs');
var data = yaml.safeLoad(fs.readFileSync('./data.yaml', 'utf8'));
console.log(data);

for (var info of data.info) {                 //用循环遍历
    driver.findElement(By.id('text')).sendKeys(info);
    driver.findElement(By.id('text')).submit();

}