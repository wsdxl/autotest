require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;


var driver= new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://localhost:4000/');

//  driver.findElement(By.xpath('//*[@id="main-nav"]/a[2]')).click();

//  driver.findElement(By.xpath('//*[@id="main-nav"]/a[3]')).click();
//  driver.quit();

//  driver.findElement(By.css('#main-nav > a:nth-child(2)')).click();

//  driver.findElement(By.css('#main-nav > a:nth-child(3)')).click();

//classname
// driver.get("file:///D:/autotest2/test.html");
// driver.findElement(By.className('xnjd')).click();

// //  id

// // driver.findElement(By.id('nav-search-btn')).click();
// driver.get("file:///D:/autotest2/test.html");
// driver.findElement(By.linkText("xnjd")).click();
// driver.get("file:///D:/autotest2/test.html");
// driver.findElement(By.partialLinkText("baidu-page")).click();


// // name
driver.findElement(By.id('nav-search-btn')).click();
driver.findElement(By.name('q')).sendKeys('hello');

// driver.findElement(By.tagName('button')).click();

// driver.findElement(By.xpath('//*[@id="post-test05"]/div[2]/header/h1/a')).click();