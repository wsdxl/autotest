require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var chai = require('chai');
var assert = chai.assert;

var driver = new webdriver.Builder().forBrowser('chrome').build();

// driver.get('https://autowebtest.github.io/add-remove/');
//  var data=['a','b','c','d','e'];


//  for(var info of data){
//      driver.findElement(By.id('text')).sendKeys(info);
//      driver.findElement(By.id('text')).submit();
//  }

//  driver.findElements(By.css('li.new-item')).then(function(eles){
//      return assert.equal(eles.length,data.length);
//  })

//  driver.quit();

driver.get('http://news.baidu.com/');
driver.manage().window().maximize();
driver.findElement(By.css('#pane-news > div > ul > li.hdline0 > strong > a')).click();
// // driver.close();
driver.sleep(3000);
driver.executeScript('document.getElementById("footerwrapper").scrollIntoView()'); // to 页面底部。这样加载一部分内容
// // driver.takeScreenshot().then(function(img){
// //     require('fs').writeFileSync('./keji.png',img,'base64')
// // })
// driver.getAllWindowHandles().then(function (wins) {
//     driver.switchTo().window(wins[1]).then(function () {
//         driver.findElement(By.css('#title')).getText().then(function (text) {
//             console.log(text);
//         })
//     })

// })


// driver.get('http://news.baidu.com/');
// driver.findElement(By.css('#pane-news > div > ul > li.hdline0 > strong > a')).click();
// // driver.getCurrentUrl().then(url => {
// //     console.log(url);
// // });
// driver.getAllWindowHandles().then((wins)=>{
//     console.log(wins.length);
    // driver.switchTo().window(wins[1]).then(function(){
//         driver.findElement(By.css('#title')).getText().then(function(text){
//             console.log(text);
//         })
//     })
// })

// 网页的前进，后退
// driver.get('https://www.baidu.com/')
// driver.findElement(By.id('kw')).sendKeys("helloworld");
// driver.findElement(By.id('kw')).submit();
// driver.sleep(3000);
// driver.navigate().back();
// driver.sleep(3000);
// driver.navigate().forward();
// driver.navigate().refresh();


// var until= webdriver.until;
// driver.get('https://www.baidu.com/');
// // driver.wait(until.elementLocated(By.id('kw')),3000);
// driver.sleep(3000);
// driver.findElement(By.id('kw')).sendKeys("helloworld");
// driver.get('https://login.anjuke.com/login/form');
// driver.switchTo().frame('iframeLoginIfm').then(function(){ //根据源码 发现iframe id值为“iframeLoginIfm”
//     var until=webdriver.until;
//     driver.wait(until.elementLocated(By.id('phoneIpt')),3000);
// driver.findElement(By.id('phoneIpt')).sendKeys('13641878150');
// driver.findElement(By.id('smsIpt')).sendKeys('1234');
// driver.findElement(By.id('smsSubmitBtn')).submit();

// driver.get('https://www.baidu.com/');
// var gengduo=driver.findElement(By.name('tj_briicon'));// 移动更多产品

// driver.actions().mouseMove(gengduo).perform()
// driver.actions().mouseMove(driver.findElement(By.name('tj_mp3'))).click().perform(); // 移动到百度音乐并点击
