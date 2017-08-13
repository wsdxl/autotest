var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    Given('打开百度首页', function () {
        return this.driver.get('http://www.baidu.com');
    });

    When('输入关键字 {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.findElement({ name: "wd" }).then(function (element) {
            element.sendKeys(stringInDoubleQuotes);
            return element.sendKeys(seleniumWebdriver.Key.ENTER);
        });
    });

    Then('百度返回结果中包含 {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        var xpath = '//*[@id="1"]/h3/a/em';
        var condition = seleniumWebdriver.until.elementLocated({ xpath: xpath });
        return this.driver.wait(condition, 5000);
    });
    Given('打开bing首页', function () {
        return this.driver.get('http://cn.bing.com/');
    });
    When('bing搜索输入关键字 {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        var xpath_val = '//*[@id="sb_form_q"]';
        return this.driver.findElement({ xpath: xpath_val }).then(function (element) {
            element.sendKeys(stringInDoubleQuotes);
            return element.sendKeys(seleniumWebdriver.Key.ENTER);
        });
    });
    Then('bing返回结果中包含 {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        var result = '//*[@id="b_results"]/li[1]/div[1]';
        var condition = seleniumWebdriver.until.elementLocated({ xpath: result });
        return this.driver.wait(condition, 5000);
    });
});