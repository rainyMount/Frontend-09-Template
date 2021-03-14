## 使用LL算法实现AST
### 一、基本概念 
1. AST——抽象语法树。代码在计算机的分析过程中，首先将编程语言分词，分词之后得到一个层层嵌套的树形结构，最后根据语法树进行解析执行。构建抽象语法树的过程被称为语法分析。最著名的语法分析算法：LL、LR（LL 表示从左到右扫描，从左到右规约）
2. LL语法分析——根据指定语法定义从左到右扫描，遇到的第一个字符可能是 MultiplicativeExpression，也可能是 AdditiveExpression，如果是 MultiplicativeExpression，这个乘法表达式很可能是一个还未解析的状态，因此还要依据乘法表达式的语法定义来做一系列解析。MultiplicativeExpression 有可能遇到的情况有Number、MultiplicativeExpression、AdditiveExpression，当遇到乘法表达式时，应该当做乘法表达式继续处理还是当做加法，需要看第二个字符是什么操作符。
    - 获取有效token：
    ` var regexp = /([0-9\.]+)|([\t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g; `
    - 定义字典
    ` var dictionary = ['Number', 'Whitespace', 'LineTerminator', '*', '/', '+', '-']; ` 
    - 匹配每一个字符，为其添加标志(注：exec() 的返回值，如果匹配成功，返回一个数组，否则返回 null)
    ` var result = regexp.exec(source) `

### 二、四则运算：四则运算的字符主要有：数字、操作符以及一些格式化的字符。
1. TokenNumber（真正有意义的输入）: . 1 2 3 4 5 6 7 8 9 0 的组合
2. Operator（操作符）: + - * / 
3. 格式化的字符：空格、换行等

### 三、四则运算语法定义
1. Expression
    - AdditiveExpression EOF
2. AdditiveExpression
    - MultiplicativeExpression
    - AdditiveExpression + MultiplicativeExpression
    - AdditiveExpression - MultiplicativeExpression
3. MultiplicativeExpression(最贴近终结符)
    - Number
    - MultiplicativeExpression * Number
    - MultiplicativeExpression / Number

'EOF' - 结束标识符(End of File) 认为加法由左右两个乘法组成，可以连加、加法是重复自身的序列 （递归）

