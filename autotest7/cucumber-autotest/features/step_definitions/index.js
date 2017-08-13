let driver = require('../support/world').driver;
let By = require('../support/world').By;
let assert = require('assert');
module.exports = function () {
    this.Given(/^打开网站首页$/, function () {
        return driver.get("http://192.168.75.130:3000");
    });
    this.When(/^点击登录按钮$/, function () {
        return driver.findElement({ linkText: '登录' }).click();
    });
    this.Then(/^用户名输入"([^"]*)"$/, function (arg1) {
        return driver.findElement({ id: 'name' }).sendKeys(arg1);
    });

    this.Then(/^密码输入"([^"]*)"$/, function (arg1) {
        return driver.findElement({ id: 'pass' }).sendKeys(arg1);
    });
    this.Then(/^点击登录$/, function () {
        return driver.findElement({ css: '.span-primary' }).click();
    });
    this.Then(/^我应该登录"([^"]*)"验证信息"([^"]*)"$/, function (arg1, arg2) {
        // 成功或失败
        switch (arg1) {
            case "成功":
                return driver.findElement({ css: '.dark' }).getText().then((text) => {
                    return assert.deepEqual(text, arg2);
                })
                break;
            case "失败":
                return driver.findElement({ css: '#content > div > div.inner > div > strong' }).getText().then((text) => {
                    return assert.deepEqual(text, arg2);
                })
                break;
            default:
                return false;
                break;

        }
    });
}