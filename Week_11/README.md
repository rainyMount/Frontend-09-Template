
思考题：first-line不能设置float，因为元素float之后会脱离文档流，影响整体布局。
## 重学CSS

### 1. css总体结构
   * @charset
   * @import
   * rules
      * @media
      * @page
      * rule

### 2. css @规则
   * @charset：声明 css 的字符集
   * @import：级联
   * @media：媒体查询
   * @page：分页媒体，打印相关
   * @counter-style：列表 icon
   * @keyframes：定义动画
   * @fontface：定义字体
   * @supports：检查某些 css 功能存不存在
   * @namespace：命名空间

### 3. css 普通规则
   * 选择器
   * 声明
     * key
     * value
> https://www.w3.org/TR/selectors-3/ 
> 
> https://www.w3.org/TR/selectors-4/ 

### 4. 选择器语法
   * 简单选择器
     * 通用选择器：*
     * 类型选择器：div，span
     * class 选择器：.cls
     * id 选择器：#id
     * 属性选择器：[attr=value]
     * 伪类选择器：:hover
     * 伪元素选择器：::before
   * 复合选择器
     * <简单选择器> <简单选择器> <简单选择器>
     * *或者 div 必须写在最前面
   * 复杂选择器（针对一个元素的结构进行选择）
     * <复合选择器> <复合选择器>：子孙选择器
     * <复合选择器> > <复合选择器>：父子选择器
     * <复合选择器> ~ <复合选择器>：邻接选择器
     * <复合选择器> + <复合选择器>：邻接选择器
     * <复合选择器> || <复合选择器>：table 时，表示选中某一列

### 5. 伪类
   * 针对链接
     * :any-link 所有超链接
     * :link 未被访问的链接
     * :visited 已访问的链接
     * :hover 
     * :active 激活
     * :focus 焦点
     * :target 
   * 其他
     * :empty 匹配没有子元素（包括文本节点）的每个元素
     * :nth-child() 父元素的第几个 child
     * :nth-last-child()
     * :first-child，:last-child，:only-child
     *  :not

### 6. 伪元素
   * ::before 在元素的前面插入一个伪元素
   * ::after 在元素的后面插入一个伪元素
   * ::first-line 第一行
   * ::first-letter 第一个字母