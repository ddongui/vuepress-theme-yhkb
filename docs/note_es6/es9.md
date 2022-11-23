# 扩展运算符-对象

```js
function connect(...user) {
    console.log(host)
    console.log(port)
    console.log(user)
    console.log(pwd)
}

connect( {host: "localhost", port: 3306, user: "root", pwd: "root"} )
```

# 正则扩展

## 命名捕获

```js
// 正常的正则
const str = "<a href='http://www.ssss.com'>tom</a>"
const reg = /<a href=["'](.*)["']>(.*)<\/a>/
console.log(reg.exec(str)) 
//
[
  "<a href='http://www.ssss.com'>tom</a>",
  'http://www.ssss.com',
  'tom',
  index: 0,
  input: "<a href='http://www.ssss.com'>tom</a>",
  groups: undefined
]
```

![11](D:\09_notes\note_es6\images\11.png)

```js
// 正则扩展
const str = "<a href='http://www.ssss.com'>tom</a>"
const reg = /<a href=["'](?<url>.*)["']>(?<text>.*)<\/a>/
console.log(reg.exec(str)) 
// 
[
  "<a href='http://www.ssss.com'>tom</a>",
  'http://www.ssss.com',
  'tom',
  index: 0,
  input: "<a href='http://www.ssss.com'>tom</a>",
  groups: [Object: null prototype] { url: 'http://www.ssss.com', text: 'tom' }
]
```

![10](D:\09_notes\note_es6\images\10.png)

## 正向断言

`(?=拉)`

 ```js
 const str = "JS2222么么555拉拉"
 const reg = /(\d+)(?=拉)/
 console.log(reg.exec(str))
 // [ '555', index: 8, input: 'JS2222么么555拉拉', groups: undefined ]
 ```

### 反向断言

`(?<=么)`

```js
const str = "JS2222么么555拉拉"
const reg = /(?=么)(\d+)/
console.log(reg.exec(str))
// null
const reg = /(?<=么)(\d+)/
console.log(reg.exec(str))
// [ '555', index: 8, input: 'JS2222么么555拉拉', groups: undefined ]
```

## dotAll模式

正则语句末尾加 ` gs`。并且 `.*` 后加 `?` 禁止贪婪（懒惰模式）

 ```js
 const str = 
 `<main>
   <div>
     <a>撒旦1</a>
     <p>阿斯顿发生1</p>
   </div>
   <div>
     <a>撒旦2</a>
     <p>阿斯顿发生2</p></div>
   <div></div>
   <div></div>
 </main>`
 const reg = /<a>(.*?)<\/a>(.*?)<p>(.*?)<\/p>/gs
 let res
 while (res = reg.exec(str)) {
   console.log(res);
 }
 //
 [
   '<a>撒旦1</a>\n    <p>阿斯顿发生1</p>',
   '撒旦1',
   '\n    ',
   '阿斯顿发生1',
   index: 19,
   input: '<main>\n' +
     '  <div>\n' +
     '    <a>撒旦1</a>\n' +
     '    <p>阿斯顿发生1</p>\n' +
     '  </div>\n' +
     '  <div>\n' +
     '    <a>撒旦2</a>\n' +
     '    <p>阿斯顿发生2</p></div>\n' +
     '  <div></div>\n' +
     '  <div></div>\n' +
     '</main>',
   groups: undefined
 ]
 [
   '<a>撒旦2</a>\n    <p>阿斯顿发生2</p>',
   '撒旦2',
   '\n    ',
   '阿斯顿发生2',
   index: 69,
   input: '<main>\n' +
     '  <div>\n' +
     '    <a>撒旦1</a>\n' +
     '    <p>阿斯顿发生1</p>\n' +
     '  </div>\n' +
     '  <div>\n' +
     '    <a>撒旦2</a>\n' +
     '    <p>阿斯顿发生2</p></div>\n' +
     '  <div></div>\n' +
     '  <div></div>\n' +
     '</main>',
   groups: undefined
 ]
 ```



