# week_01
-----
## 学习笔记
### 学习方法/知识体系构建 
1. 业务/技术/工程 
2. 进阶目标：组件化、发布系统（持续集成、工具链暂缓）
3. 学习方法：追溯法 
### tictactoe 
1. 二维数组扁平化 
2. 人机交互需要计算胜率、策略，在此过程中需要注意循环深度，注意合理使用break 

### 异步编程——红绿灯 
1. callback方式（setTimeout层层回调，会造成回调地域的弊端）代码结构复杂，不易维护 
2. promise .then链式调用 
3. async/await + while(true)  （早年使用generator + yeild模拟，现在基本弃用这种模拟方式）
4. Generator + async 实现迭代器（了解）