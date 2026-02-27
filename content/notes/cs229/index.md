+++
title = "cs229"
date = "2026-02-25T13:58:00+08:00"
draft = false
[article]
showHero = true
heroStyle = "background"
+++
{{< katex >}}
本系列是根据[斯坦福课程cs229](https://www.youtube.com/watch?v=4b4MUYve_U8&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU&index=2)听课整理所得
## Linear Regression 线性回归
当我们有了一些可能存在线性相关的数据时,我们可以使用线性函数来进行拟合
比如:
$$h(x) = \sum_{j=0}^{n}\theta _j x_j$$
我们让$x_0=1$这时,$h(x)$可以表示一个线性函数(liner function),在数学上被称为仿射函数(affine function),因为存在$\theta_0$作为截距可以调成初始函数值.

我们称$\theta$为参数(parameters),通过学习算法.我们选择$\theta$

类似的,我们用
- $m$表示训练内容量(the number of training examples)
- $x$表示输入内容(inputs),也被称为特征(features)
- $y$表示输出(outputs),也被称作目标变量(target variable)
- $(x,y)$表示一个训练例子(training example)
- $(x^{(i)},y^{(i)})$表示第$i$个训练例子(the $i^{th}$ training example)
- $n$表示监督学习(supervised learning)中总的特征数量
### HOW TO CHOOSE a $\theta$
> $s.t. \; h(x) \approx y \; for \; training \; examples$

我们可以使用记号$h_\theta (x)$来强调$h$同时依赖于参数与特征,当然两者没有本质区别

为此我们,我们可以最小化
$$(h_\theta (x)- y)^2$$
对于$m$个训练数,也就求得$minJ(\theta)$.其中,$J(\theta)$为:
$$J(\theta)=\frac{1}{2}\sum_{i=1}^{m}(h_\theta (x)- y)^2 $$
Wu声称$\frac{1}{2}$是为了使得求导后更加容易算,而是否有$\frac{1}{2}$并不影响最小值~~我感觉不是很有必要~~
