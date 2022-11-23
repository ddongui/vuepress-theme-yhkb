# async

**作用**

> 1. **async** 修饰 **函数** 并且**强制**返回值为 **promise**对象。
>
> 2. 并且函数内部想要使用 await 关键字，这个函数必须是async函数
> 3. 没有协程概念, (我觉得有写成概念，但是没有，很垃圾)。

```js
async function fun() {
    return "asd"
    // 返回值Promise对象。PromiseStatus = "resolved"  PromiseValue = "asd"
    throw new Error("error") 
    // 返回值Promise对象。 PromiseStatus = "rejectd"  PromiseValue = "Error: error"
    return New Promise((resolve, reject) => {
        resolve("成功")
        reject("失败")
    })
} 

//res有可能没有值，因为res不会等待fun()执行完成。这可能是fun()内部有异步的请求. 比如setTimeout()函数
const res = fun()

fun().then((res) => {
    //
}, (err) => {
    //
})
```

# await

堵塞 **async函数** 所在的执行处, 直到 所等待**函数内部** **所返回的 Promise对象**的**中异步请求执行完成并且resolve或reject出去**。

条件：

> 1. 自己所处的函数必须是asycn函数。
>
> 2. 所等待的函数必须返回Promise对象

注意：

> 执行的函数会正常执行一遍。 遇到异步函数 会继续进去执行,不会跳过。 async并不是异步函数。setTimeout()、网络请求、等才是

## 总结

1. **Promise是用来包装异步操作的，所以仅仅包含同步代码它是异步不了滴。**
2. **Promise把异步操作包装起来，是为了让你的异步代码看起来更直观更优雅。**

3. **async函数是用来包装Promise的，所以仅仅包含同步代码它也是异步不了滴。**
4. **async函数把Promise包装起来，是为了让你的异步代码看起来比Promise还要直观还要**
    **优雅，能够做到望文生义......**

# 对象方法的扩展

```js
// 获取对象所有键
Object.keys(o: {}): string[]
// 获取对象所有值
Object.values(o: {}): any[]
// 获取对象所有键值、 es10新增将二维数组转换为对象
Object.entries(o: {}): [string, any][]
// 获取对象属性的描述
Object.getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };

const obj = Object.create(null, {
    name: {
        // 属性值
        value: "tom",
        // 属性特性
        writable: true,   // 可写的
        configurable: true, // 可配置的
        enumerable: true //  可枚举的
    }
})
```



