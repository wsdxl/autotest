require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
// driver.get('https://login.taobao.com/');
// driver.findElement(By.css('#J_Quick2Static')).click();
// driver.findElement(By.xpath('//*[@id="TPL_username_1"]')).clear();
// driver.findElement(By.xpath('//*[@id="TPL_username_1"]')).sendKeys('dxl221');
// driver.findElement(By.id('TPL_password_1')).sendKeys('abc4862556');
// // driver.findElement(By.id('J_SubmitStatic')).click();
// driver.findElement(By.id('J_SubmitStatic')).submit();

// driver.get('https://s.taobao.com/search?q=%E7%AC%94%E8%AE%B0%E6%9C%AC&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170702');
// driver.findElements(By.css('div.item.J_MouserOnverReq')).then(function(count){
//     console.log('length:',count.length)

//  })

// driver.get('https://s.taobao.com/search?q=%E7%AC%94%E8%AE%B0%E6%9C%AC&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170702');
// driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div')).getLocation().then(function(location){
//     console.log('location:',location);
// })
// driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div > h1')).getTagName().then(function(tag){
//     console.log('tag:',tag);
// })
// driver.findElement(By.css('#q')).getText().then(function(text){
//     console.log('text:',text);
// })

// driver.get('https://autowebtest.github.io/dashboard/user.html')
// driver.findElement(By.id('female')).isSelected().then(function(bool){
//     console.log('bool:',bool)

// })

// driver.get('https://www.taobao.com/')
// // driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div')).getCssValue('width').then(function (value) {
// //     console.log('value:', value)
// // })
// driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div')).getAttribute('class').then(function (att) {
//     console.log('att:', att)
// })

// driver.get('https://www.jd.com/');
// driver.takeScreenshot().then(function(screen){
//     // console.log('screen:',screen)
//     require('fs').writeFile('a.png',screen,'base64')

driver.get('https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC&enc=utf-8&wq=%E7%AC%94%E8%AE%B0%E6%9C%AC&pvid=3a240cd0ebda4a56ac7d46593ed43f75');

driver.executeScript('document.getElementById("service-2014").scrollIntoView()')
driver.sleep(3000);
driver.findElements(By.css('div.gl-i-wrap')).then(function (count) {
    console.log('length:', count.length)

})
