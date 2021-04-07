## 重学javascript（二）
### 运算符和表达式
1. Member
    * 成员访问：a.b, a[b]
    * foo\`string`
    * super关键字
      * super.b
      * super['b']
    * new.target
    * new Foo();
      > 带括号的new优先级更高，如 `new a()()` 和 `new new foo()`中，第一个第一个应该是 `(new a())()`，第二个应该是`new (new foo())`
2. Reference
    * Object
    * Key
    * delete
    * assign
3. Expression
    * Call
      * foo()
      * super()
      * foo().b
      * foo()['b']
      * foo()\`abc`
    * Left Handside (从左向右)
      * 
    * Right Handside (从右向左)
      * Update, Eg:
        * a++、a--、++a、--a
        > 如：`++a++` 实际上为 `++(a++)`,所以它是不合法的
    * 单目运算符
      * delete
      * void
      * typeof
      * +a、-a、~a、！a
      * await
    * Exponental
      * \** 乘方
        > `2**3**2`实际上运算顺序为：`2**(1**2)`，最终结果为2
    * 四则运算
      * Multiplication：* / %
      * Addtive：+ -
      * shift（位运算）：
      * 关系比较表达式：>、 <、 >=、 <=、instanceof
    * 相等比较
      * ==
      * !=
      * ===
      * !==
    * BitWise（按位与）
      * & ^ |
    * Logical（逻辑运算）
      * &&、||
      > 注意有短路原则（一定情况下可以代替if）不是所有表达式的子结构都会被执行
    * conditional
      * a ? b : c
      > 注意有短路原则（一定情况下可以代替if）不是所有表达式的子结构都会被执行
### 类型转换