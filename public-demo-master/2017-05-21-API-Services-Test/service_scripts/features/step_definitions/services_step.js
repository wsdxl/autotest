var Cucumber = require('cucumber');
var got = require('got');
var assert = require('assert');

Cucumber.defineSupportCode(function (context) {
    var setWorldConstructor = context.setWorldConstructor;
    var Given = context.Given
    var When = context.When
    var Then = context.Then

    var jsonFarmot = {
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    }

    When('发送get请求到 {stringInDoubleQuotes} 应该得到用户{int}的相关信息', function (stringInDoubleQuotes, int, string) {
        return got.get(stringInDoubleQuotes, jsonFarmot).then(function (jsonresult) {
            // console.log("jsonresult", jsonresult.body)
            // console.log("string", JSON.parse(string))
            var data = jsonresult.body
            var assertdata = JSON.parse(string);

            return assert.deepEqual(data, assertdata);
        })

    });


    When('使用post方法添加一个user应该添加成功', function (string) {
        var user = { id: 3, name: "helloworld", location: "china" }
        var options = {
            headers: {
                'Content-Type': 'application/json'
            },
            json: true,
            body: JSON.stringify(user)
        }
        return got.post("http://localhost:3000/users", options).then(function (response) {
            var data = response.body
            var assertdata = JSON.parse(string);
            return assert.deepEqual(data, assertdata);
        })
    });
    When('发送get请求到 {stringInDoubleQuotes} 预期结果为', function (stringInDoubleQuotes, string) {
        return got.get(stringInDoubleQuotes, jsonFarmot).then(function (jsonresult) {
            // console.log("jsonresult", jsonresult.body)
            // console.log("string", JSON.parse(string))
            var data = jsonresult.body
            var assertdata = JSON.parse(string);

            return assert.deepEqual(data, assertdata);
        })
    });
    When('使用post方法添加一个新的用户user,服务器添加成功后预期结果为', function (string) {
        var user = { id: 4, name: "JackMa", location: "china" }
        var options = {
            headers: {
                'Content-Type': 'application/json'
            },
            json: true,
            body: JSON.stringify(user)
        }
        return got.post("http://localhost:3000/users", options).then(function (response) {
            var data = response.body
            var assertdata = JSON.parse(string);
            return assert.deepEqual(data, assertdata);
        })
    });
    Given('post {stringInDoubleQuotes} 期望值为', function (stringInDoubleQuotes, string) {
        var postjson = {
            headers: {
                'Content-Type': 'application/json'
            },
            json: true,
            body: JSON.stringify(JSON.parse(string))
        }
        return got.post(stringInDoubleQuotes, postjson).then(function (res) {
            var realdate = res.body
            var assertdate = JSON.parse(string)
            assert.deepEqual(realdate, assertdate)
        })
    });

})