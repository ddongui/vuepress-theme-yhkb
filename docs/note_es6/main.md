# 1.var&let&const

![1](D:\09_notes\note_es6\images\1.png)

**const**

不可改变其值, 赋值其数组可以在数组追加元素是因为常量存储的是数组地址。地址并没有改变所以可追加元素

# 2.解构赋值

**有迭代器才能解构**

**数组解构**

```js
const arr = ["晓晨阳", "六嗯那个"];
const [v1, v2] = arr;
```

**对象解构**

```js
const obj = {
    name: "赵本山",
    fun: function(){}
}
const { name, fun } = obj;
```

# 3.模板字符串

```js
`${var}啊实
打实的`
```

# 4.箭头函数

this是静态的。指向函数在声明时指向的地址 

# 5.展开运算符-数组

```js
const arr = ["王太利", "小样"]
const arr2 = ["曾以", "零花"]

const arr3 = [...arr, ...arr2] // ["王太利", "小样","曾以", "零花"]
```

# 6.symbol

## **介绍**

与string的不同

![2](D:\09_notes\note_es6\images\2.png)

```js
var a = "123";
var b = "123";

a === b;  //返回true。两者在常量区引用同一个字符串
```

![4](D:\09_notes\note_es6\images\4.png)

```js
const a = Symbol("标识"); ///Symbol("标识")
const b = Symbol("标识"); ///Symbol("标识")

a !== b;  //a和b持有的是两块内存的引用
```

# 迭代器

```js
for (let v of obj) {}
```

# 7.生成器函数

```js
function * fun() { } 
```

**介绍**

![5](D:\09_notes\note_es6\images\5.png)

**传参**

![6](D:\09_notes\note_es6\images\6.png)

## 实例

![7](D:\09_notes\note_es6\images\7.png)

# 8.Promise

**基础**

```js
const p = new Promise((resolve, reject) => {
  const num = Math.ceil(Math.random() * 10);
  if (num > 5) {
     resolve("success: " + num); // 调用p的第一个回调函数
  } 
  reject("error: " + num); // 调用p的第二个回调函数
});

p.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
```

![8](D:\09_notes\note_es6\images\8.png)

**返回值**

![9](D:\09_notes\note_es6\images\9.png)

# 9.集合

## Set

`new Set<T>()`

| 成员                          | 说明 |
| :---------------------------- | ---- |
| readonly **size**: number     |      |
| **add**(value: T): this       |      |
| **delete**(value: T): boolean |      |
| **has**(value: T): boolean    |      |
| **clear**(): void             |      |
| **forEach** ()                |      |

## Map

接收一个二维数组，自动转为键值对形式

`new Map<K, V>()`

| 成员                            | 说明 |
| :------------------------------ | ---- |
| readonly **size**: number       |      |
| **set**(key: K, value: V): this |      |
| **delete**(key: K): boolean     |      |
| **has**(key: K): boolean        |      |
| **clear**(): void               |      |
| **forEach** ()                  |      |

**实例**

```js
function fun(...strings: string[]) {
  log(Object.entries(strings)); // [ [ '0', '1' ], [ '1', '2' ], [ '2', '3' ] ]
  return new Map(Object.entries(strings));
}

console.log(fun("1", "2", "3"))
// Map(3) { '0' => '1', '1' => '2', '2' => '3' }
```



# 10.数值扩展

**二进制** `0b + number`

**八进制** `0o + number`

**十六进制** `0x + number|string`

## Number类

`Number.EPSILON` 巨小的数值

`Number.isFinite` 是否是有限数

`Number.isNaN`  值是否为NaN

`Number.isInteger` 是否为整数

`Number.parseInt` 将字符串转换为整数

## Math类

`Math.trunc` 将小数部分抹去 

`Math.sign` 正数返回1，零返回0， 负值返回-1 

# 11.对象扩展

## Object类

`Object.is`  判断两个值是否相等

`Object.assign`  对象合并  

`Object.setProtoTypeOf`

`Object.getProtoTypeOf`

# 12.模块化

**导出**与**导入**

`main.js` 

```js
// 分别暴露
export const v1 = "test"
export function fun1(){}
// 全部导入
import * as name from "main.js"
console.log(name) // {v1, fun1}
```

```js
// 统一暴露
export {v1, fun1}

import {v1, fun1} from "main.js" // 解构赋值导入
import {v1 as v2 , fun1 as fun2} from "main.js" //别名
```

```js
// 默认暴露
export default "任意类型变量或函数"

import {default as name} from "main.js"
import name from "main.js" //针对默认暴露
```

  `index.html`  中**导入**

```html
<script src="main.js" type="module"></script>
```

