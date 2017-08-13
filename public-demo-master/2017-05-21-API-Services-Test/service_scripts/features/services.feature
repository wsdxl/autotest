Feature: Json Services Test
 这是接口测试快速上手demo
 主要使用到cucumber.js && got
 cucumber-js: https://github.com/cucumber/cucumber-js
 got:https://github.com/sindresorhus/got

 Scenario: 测试get请求 get user id ==1
    TODO service Get
   When 发送get请求到 "http://localhost:3000/users/1" 应该得到用户1的相关信息
    """
      {
          "id": 1,
          "name": "therebelrobot",
          "location": "USA"
        }
      """

 Scenario: 测试post请求
  TODO service Post
   When 使用post方法添加一个user应该添加成功
      """
      {
        "id": 3,
        "name": "helloworld",
        "location": "china"
      }
      """
 @getuser
 Scenario: 测试get请求 get user id ==2
    
   When 发送get请求到 "http://localhost:3000/users/2" 预期结果为
    """
    {
    "id": 2,
    "name": "visiting-user",
    "location": "UK"
    }
      """

 Scenario: 测试post请求

   When 使用post方法添加一个新的用户user,服务器添加成功后预期结果为
      """
      {
        "id": 4,
        "name": "JackMa",
        "location": "China"
      }
      """
  @post    
  Scenario: post data
   Given post "http://localhost:3000/posts" 期望值为
     """
     {
      "id": 2,
      "title": "json-mock-test",
      "body": "The internet is cool!",
      "author": "visiting-user",
      "userId": 2
    }
     """
     
  

    
  