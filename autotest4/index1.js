require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
var chai = require('chai');
var assert = chai.assert;

// driver.get('https://autowebtest.github.io/add-remove');
// driver.manage().window().maximize();
// var data=['a','b','c','d']

// for(var info of data){
//     driver.findElement(By.id('text')).sendKeys(info);
//     driver.findElement(By.id('text')).submit();
// }
// driver.findElements(By.css('li.new-item')).then(function(eles){
//     return  assert.equal(eles.length,data.length);
// })

// driver.get('http://news.baidu.com/');
// driver.manage().window().maximize();
// driver.findElement(By.css('#pane-news > div > ul > li.hdline0 > strong > a')).click();
// driver.quit();
// driver.close();
// driver.sleep(3000);
// driver.executeScript('document.getElementById("footerwrapper").scrollIntoView()');
// // driver.takeScreenshot().then(function(img){
// //     require('fs').writeFileSync('./ke.png',img,'base64');
// // })
// driver.getPageSource().then(function(a){
//      require('fs').writeFileSync('./baidu.txt',a,'utf8')
// })
// driver.get('http://news.baidu.com/');
// driver.manage().window().maximize();
// driver.findElement(By.css('#pane-news > div > ul > li.hdline0 > strong > a')).click();
// // driver.getCurrentUrl().then(function(url){
// //     console.log('url:',url)
// // })
// driver.getAllWindowHandles().then(function (wins) {
//     console.log(wins.length);
//     driver.switchTo().window(wins[1]).then(function () {
//         driver.findElement(By.css('#title')).getText().then(function (text) {
//             console.log(text)
//         })
//     })
// })

// driver.get('https://www.baidu.com/');
// driver.findElement(By.id('kw')).sendKeys('helloworld');
// driver.findElement(By.id('kw')).submit();
// driver.sleep(3000);
// driver.navigate().back();
// driver.sleep(3000);
// driver.navigate().forward();
// driver.sleep(3000);
// driver.navigate().refresh();

// var until=webdriver.until;
// driver.get('https://www.baidu.com/');
// // driver.wait(until.elementLocated(By.id('kw')),3000);
// driver.sleep(3000);
// // driver.findElement(By.id('kw')).sendKeys('helloworld');
// driver.get('https://login.anjuke.com/login/form');
// driver.manage().window().maximize();
// driver.switchTo().frame('iframeLoginIfm').then(function(){
//     var until=webdriver.until;
//     driver.wait(until.elementLocated(By.id('phoneIpt')),3000);
//     driver.findElement(By.id('phoneIpt')).sendKeys(13641878150);

// })

driver.get('https://www.baidu.com/');
var gengduo=driver.findElement(By.name('tj_briicon'));

driver.actions().mouseMove(gengduo).perform();
driver.actions().mouseMove(driver.findElement(By.xpath('//*[@id="head"]/div/div[4]/div/div[2]/div[1]/div/a[2]'))).click().perform();