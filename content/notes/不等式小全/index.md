+++
title = "不等式小全"
date = "2026-02-27T21:58:00+08:00"
draft = false
[article]
showHero = true
heroStyle = "background"
+++
{{< katex >}}
题记-tmd,今天花了一晚上终于搞完了

寒假课程上完,感觉不等式毫无长进,似乎只有多做题才有感觉(大悲

倒是在陈讲义之外自己搞了一份比较全的不等式整理,但是整理似乎没有加深我的理解,后面会持续增加新内容,所以就先叫小全吧

# 不等式
## 第一部分：均值不等式

## 1.均值不等式
### 定义 算术平均、几何平均、调和平均、平方平均

对 $n$ 个正实数 $a_1， a_2， \cdots， a_n$，定义它们的算术平均 $A_n = \frac{a_1 + a_2 + \cdots + a_n}{n}$，几何平均 $G_n = \sqrt[n]{a_1 a_2 \cdots a_n}$，调和平均 $H_n = \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_n}}$，以及平方平均 $Q_n = \sqrt{\frac{a_1^2 + a_2^2 + \cdots + a_n^2}{n}}$。

### 均值不等式

对任意 $n$ 个正实数 $a_1， a_2， \cdots， a_n$，均成立下述不等式：

$$H_n \leq G_n \leq A_n \leq Q_n$$

其中每个等号都当且仅当 $a_1 = a_2 = \cdots = a_n$ 时成立。该不等式即为均值不等式。

**定理：** 对于任意正实数 $x， y， z$，均有：
$$\frac{x+y+z}{3} \geq \sqrt[3]{xyz}$$
当且仅当 $x=y=z$ 时，等号成立。


**证明：**

1.  **引入变量代换：**
    令 $x = a^3， y = b^3， z = c^3$，由于 $x， y， z$ 为正实数，则 $a， b， c$ 也为正实数。
    我们要证明的是：
    $$\frac{a^3+b^3+c^3}{3} \geq abc \quad \text{即} \quad a^3+b^3+c^3 - 3abc \geq 0$$

2.  **利用欧拉恒等式：**
    根据代数中的欧拉公式（多项式因式分解），我们有：
    $$a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$$

3.  **进一步配方变形：**
    利用配方法，可以将第二个括号内的项改写为：
    $$a^2+b^2+c^2 - ab - bc - ca = \frac{1}{2} \left[ (a-b)^2 + (b-c)^2 + (c-a)^2 \right]$$
    因此，原恒等式可写作：
    $$a^3 + b^3 + c^3 - 3abc = \frac{1}{2}(a+b+c) \left[ (a-b)^2 + (b-c)^2 + (c-a)^2 \right]$$

4.  **符号判断：**
    *   因为 $a， b， c > 0$，所以 $(a+b+c) > 0$。
    *   因为实数的平方非负，所以 $(a-b)^2 \geq 0$、$(b-c)^2 \geq 0$、$(c-a)^2 \geq 0$。
    *   因此，整个表达式的右端 $\geq 0$。

5.  **结论：**
    由于右端 $\geq 0$，推得 $a^3 + b^3 + c^3 - 3abc \geq 0$，即 $a^3 + b^3 + c^3 \geq 3abc$。
    将 $a=\sqrt[3]{x}， b=\sqrt[3]{y}， c=\sqrt[3]{z}$ 代回，得：
    $$x + y + z \geq 3\sqrt[3]{xyz} \implies \frac{x+y+z}{3} \geq \sqrt[3]{xyz}$$

6.  **等号成立条件：**
    当且仅当 $(a-b)^2 = 0， (b-c)^2 = 0， (c-a)^2 = 0$ 时，即 $a=b=c$（对应 $x=y=z$）时，等号成立。

## 2. 均值意义下的“纯种”和“杂种”
*   **概念描述**：
    *   **纯种**：齐次且对称的项。如 $a^2+b^2+c^2$
    *   **杂种**：非对称或乘积形式的项。如 $ab+bc+ca$ 或 $a^2b+b^2c+c^2a$
    
    个人理解为基于排序不等式获得的一种做题感觉，通过形式整齐与否获得证明的大致感觉

## 3. 均值调整表达式的次数（齐次化处理）
*   **概念描述**：
   
    有的时候可以通过拆散和加入来达成增多项数以凑比较好看的开根号后的次数，比如五次凑二次可以通过:
    $$a^5+3a=a^5+a+a+a\geq 4\sqrt[4]{a^8}=4a^2$$
    来达成
## 4. 均值在和式和积式之间的转换
*   **概念描述**：
   
    这个就比较简单了，其实就是看到很多和式乘在一起，就可以使用均值处理和式，这样一边会直接全部化为和式

## 5. 消分母
*   **消分母**：本质上就是通过均值中的乘式解决分式中的分母
*   **证明思路**：将分母作为一个项，通过加一项相同的变量或常数，利用 AM-GM 乘积消去分母。

## 6. 均值与局部不等式
*   **概念描述**：有的时候多变量长得很像，每个变量就对应一个小不等式，直接考虑一个变量，在区域内均值


<div style="page-break-after: always;"></div>

# 第二部分：柯西不等式 (Cauchy-Schwarz Inequality)

## 1. 证法 1：二次函数法（判别式法）
*   **证明**：构造 $f(x) = \sum (a_i x - b_i)^2 \ge 0$。
    展开得：$(\sum a_i^2)x^2 - 2(\sum a_i b_i)x + \sum b_i^2 \ge 0$。
    因其对任意 $x$ 恒成立，故 $\Delta = 4(\sum a_i b_i)^2 - 4(\sum a_i^2)(\sum b_i^2) \le 0$。

## 2. 证法 2：拉格朗日恒等式
*   **公式**：$(\sum a_i^2)(\sum b_i^2) - (\sum a_i b_i)^2 = \sum_{1 \le i < j \le n} (a_i b_j - a_j b_i)^2$。

    上式不仅证明了柯西不等式，还直接指出了取等条件为 $a_i b_j = a_j b_i$，即序列成比例。

## 3. 推广：赫尔德(holder)，卡尔松 (Carlson) 与 权方和（柯西消分母）不等式
### 赫尔德不等式
*   **形式**:
    设 $a_1， a_2， \dots， a_n$ 及 $b_1， b_2， \dots， b_n$ 为正实数。设 $p， q > 1$ 且满足共轭指数条件 $\frac{1}{p} + \frac{1}{q} = 1$，则：
    $$\sum_{i=1}^n a_i b_i \leq \left( \sum_{i=1}^n a_i^p \right)^{1/p} \left( \sum_{i=1}^n     b_i^q \right)^{1/q}$$

    当且仅当 $a_i^p$ 与 $b_i^q$ 成比例时，等号成立。

### 证明方法：杨氏不等式法 (Young's Inequality)(证明在后)
1. **归一化**：令 $A = (\sum a_i^p)^{1/p}$，$B = (\sum b_i^q)^{1/q}$。令 $x_i = a_i/A， y_i = b_i/B$，则只需证明 $\sum x_i y_i \leq 1$。
2. **利用杨氏不等式**：对于任意 $x， y > 0$，有 $xy \leq \frac{x^p}{p} + \frac{y^q}{q}$。
3. **求和证明**：
   $$\sum x_i y_i \leq \sum \left( \frac{x_i^p}{p} + \frac{y_i^q}{q} \right) = \frac{1}{p} \sum x_i^p + \frac{1}{q} \sum y_i^q = \frac{1}{p}(1) + \frac{1}{q}(1) = 1$$
4. **代回得证**
### 卡尔松不等式
*   **形式**:

    设 $m， n$ 是正整数，对 $mn$ 个正实数 $a_{ij}$ ($1 \leq i \leq m， 1 \leq j \leq n$)，有：

$$\prod_{i=1}^m \left( \sum_{j=1}^n a_{ij} \right) \geq \left( \sum_{j=1}^n \sqrt[m]{\prod_{i=1}^m a_{ij}} \right)^m$$


### 证明：

这个不等式的证明并不困难，直接套用前面 $AM \geq GM$ 的证明方法就能解决.下面给出一种不同的证法：

首先固定 $j$，由均值不等式（AM-GM）得：

$$\frac{\sum_{i=1}^m \frac{a_{ij}}{\sum_{j=1}^n a_{ij}}}{m} \geq \frac{\sqrt[m]{\prod_{i=1}^m a_{ij}}}{\sqrt[m]{\prod_{i=1}^m \sum_{j=1}^n a_{ij}}}$$

上式再对 $j$ 从 $1$ 到 $n$ 求和，注意到左边等于：

$$\sum_{j=1}^n \sum_{i=1}^m \frac{a_{ij}}{m \cdot \sum_{j=1}^n a_{ij}} = \frac{1}{m} \sum_{i=1}^m \frac{\sum_{j=1}^n a_{ij}}{\sum_{j=1}^n a_{ij}} = \frac{1}{m} \cdot m = 1$$

右边等于：

$$\frac{\sum_{j=1}^n \sqrt[m]{\prod_{i=1}^m a_{ij}}}{\sqrt[m]{\prod_{i=1}^m \sum_{j=1}^n a_{ij}}}$$

由 $1 \geq \frac{\sum_{j=1}^n \sqrt[m]{\prod_{i=1}^m a_{ij}}}{\sqrt[m]{\prod_{i=1}^m \sum_{j=1}^n a_{ij}}}$，整理即得原式：

$$\prod_{i=1}^m \sum_{j=1}^n a_{ij} \geq \left( \sum_{j=1}^n \sqrt[m]{\prod_{i=1}^m a_{ij}} \right)^m$$
### 权方和不等式：
*   **形式**:
    $$\sum \frac{a_i^2}{x_i} \ge \frac{(\sum a_i)^2}{\sum x_i}$$
    $RHS$分母移项后柯西不等式直接出
### 技巧:
*    个人认为，单论柯西不等式，主要考验的其实是能否注意到使用并对原式进行处理后看出配凑形式，最好乘式有一个是常数是比较好的形式，针对分式考虑通过乘法消去分母或者直接通过权方和合并.
*   **柯西调整次数**：若分子不是平方，如 $\sum \frac{a}{b+c}$，可变形为 $\sum \frac{a^2}{ab+ac}$。

<div style="page-break-after: always;"></div>

# 第三部分：琴生不等式 (Jensen's Inequality)

## 1. 凸函数的定义、性质和判定
*   **定义**：
设函数 $f(x)$ 在区间 $I$ 有定义，若对 $\forall x_1， x_2 \in I， \forall t \in (0， 1)$，有

    $$f(tx_1 + (1-t)x_2) \leq tf(x_1) + (1-t)f(x_2)，$$

    则称 $f(x)$ 为 $I$ 上的**凸函数**。若当 $x_1 \neq x_2$ 时上述不等式总是严格成立，则称 $f(x)$ 为 $I$ 上的**严格凸函数**。把上述定义的不等号反向，就得到了（严格）**凹函数**的定义。

---

### 凸函数的性质与判定

1. 设 $f(x)$ 在 $[a， b]$ 上连续，在 $(a， b)$ 上可导，则 $f(x)$ 为凸函数 $\Leftrightarrow f'(x)$ 在 $(a， b)$ 单调上升（指单调不减），严格凸函数则是严格单调上升；
2. 设 $f(x)$ 在 $[a， b]$ 连续，在 $(a， b)$ 上二阶可导，$f(x)$ 为凸函数 $\Leftrightarrow f''(x) \geq 0$；$f(x)$ 为严格凸函数 $\Leftrightarrow f''(x) \geq 0$，且在 $(a， b)$ 的任意一个子区间上不恒为 $0$；
3. 设 $f(x)$ 在 $[a， b]$ 连续，在 $(a， b)$ 可导，对 $t \in [a， b]$，设 $g_t(x) = f(t) + f'(t)(x-t)$ 是 $t$ 处的切线，则 $f(x)$ 为凸函数 $\Leftrightarrow \forall t \in [a， b]， f(x) \geq g_t(x)$ 对 $x \in [a， b]$ 均成立。若是严格凸函数，则该不等式当且仅当 $x = t$ 时成立；
4. 定义在 $(a， b)$ 上的凸函数必连续，改成闭区间则不一定成立。

## 琴生不等式应用条件
*   **公式**：$f(\sum \lambda_i x_i) \le \sum \lambda_i f(x_i)$，其中 $\sum \lambda_i = 1$。
*   **前提**：先通过二阶导完成凹凸函数的判定

## 琴生变式
*   **齐次化假设**：常设 $\sum a_i = 1$ 或 $\sum a_i = 3$，简化 $\lambda_i$ 的处理。
*   **对数函数的应用**：在遇到如$\Pi$的多乘式时，常令$f(x) = \ln x$（典型上凸），可直接导出均值不等式 $G_n \le A_n$
*   **分子权重化**：处理 $\sum \frac{a}{a+b+c} f(x_i)$，将系数 $\frac{a}{a+b+c}$ 看作权重 $\lambda_i$

## 局部线性放缩（切线法）
*   **方法**：在取等点 $x_0$ 处对函数求切线 $L(x) = f'(x_0)(x-x_0) + f(x_0)$。

    一方面，琴生是有力的，看到很多重复的形式可以直接划入函数开导来快速判断，将不等式套入函数处理手段，但是二阶导就使得算导数，尤其是对分式变得十分麻烦，需要熟练求导并掌握一些计算省略的技巧.

<div style="page-break-after: always;"></div>

# 第四部分：幂平均与杨(Young)不等式

## 幂平均不等式 (Power Mean)
*   **形式**：设 $a = (a_1， a_2， \dots， a_n)$ 为正实数序列，定义幂平均函数为：
    $$M_r(a) = \left( \frac{a_1^r + a_2^r + \dots + a_n^r}{n} \right)^{\frac{1}{r}} \quad   (r \neq 0)$$
    若 $r \leq s$，则 $M_r(a) \leq M_s(a)$。

*   **证明**：
我们要证明当 $r < s$ 时，$M_r(a) \leq M_s(a)$。

    - 情况 1：$0 < r < s$
    令 $k = \frac{s}{r} > 1$。定义函数 $f(x) = x^k$。
    因为 $k > 1$，所以 $f(x)$ 在 $(0， +\infty)$ 上是凸函数。
    令 $x_i = a_i^r$，根据琴生不等式：
        $$f\left( \frac{1}{n} \sum_{i=1}^n x_i \right) \leq \frac{1}{n} \sum_{i=1}^n f(x_i)$$
        代入 $f(x)$ 和 $x_i$：
        $$\left( \frac{\sum a_i^r}{n} \right)^{\frac{s}{r}} \leq \frac{\sum (a_i^r)^{\frac{s}{r}}}{n} = \frac{\sum a_i^s}{n}$$

        由于 $s > 0$，两边同时开 $s$ 次方（即取 $1/s$ 次幂）：
        $$\left[ \left( \frac{\sum a_i^r}{n} \right)^{\frac{s}{r}} \right]^{\frac{1}{s}} \leq \left( \frac{\sum a_i^s}{n} \right)^{\frac{1}{s}}$$
        $$\left( \frac{\sum a_i^r}{n} \right)^{\frac{1}{r}} \leq \left( \frac{\sum a_i^s}{n} \right)^{\frac{1}{s}}$$
        即 $M_r(a) \leq M_s(a)$。

    - 情况 2：$r < s < 0$
    令 $r' = -r， s' = -s$，则 $r' > s' > 0$。
    利用已证的正指数情况，对 $b_i = \frac{1}{a_i}$ 应用结论，或通过改变 $f(x) = x^{s/r}$ 的凹凸性讨论（此时 $0 < s/r < 1$，函数为本定义下的凹函数），同理可证。


## 杨不等式 (Young's Inequality)
*   **公式**：$ab \le \frac{a^p}{p} + \frac{b^q}{q}$（其中 $\frac{1}{p} + \frac{1}{q} = 1， p，q > 1$）。
*   **证明**：对 $f(x) = \ln x$ 使用琴生不等式：$\ln(\frac{1}{p}a^p + \frac{1}{q}b^q) \ge \frac{1}{p}\ln a^p + \frac{1}{q}\ln b^q = \ln a + \ln b = \ln(ab)$。

<div style="page-break-after: always;"></div>

# 第五部分：排序不等式与切比雪夫不等式(Chebyshev)

## 排序不等式 
*   **形式**：设两组实数序列满足：
    $$a_1 \leq a_2 \leq \cdots \leq a_n$$
    $$b_1 \leq b_2 \leq \cdots \leq b_n$$

    设 $c_1， c_2， \cdots， c_n$ 是 $b_1， b_2， \cdots， b_n$ 的任意一个排列，记：
*   **顺序和**：$S_{max} = \sum_{i=1}^n a_i b_i = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n$
*   **乱序和**：$S = \sum_{i=1}^n a_i c_i = a_1 c_1 + a_2 c_2 + \cdots + a_n c_n$
*   **逆序和**：$S_{min} = \sum_{i=1}^n a_i b_{n-i+1} = a_1 b_n + a_2 b_{n-1} + \cdots + a_n b_1$

    则有：
    $$S_{min} \leq S \leq S_{max}$$



**证明** ：逐步调整法 

我们以证明 $S \leq S_{max}$ 为例，证明通过有限次调整，可以将任意乱序和转化为顺序和，且每一步调整都会使总和增大或保持不变。


1.  **初始状态**：
    设当前的和为 $S = \sum_{k=1}^n a_k c_k$。如果 $c_k$ 的排列不完全按照顺序排列（即 $c_k$ 不是 $b_k$），那么必然存在两个下标 $i < j$，满足 $a_i \leq a_j$ 但 $c_i > c_j$（即这对元素是“逆序”的）。

2.  **执行交换（调整）**：
    我们将 $c_i$ 和 $c_j$ 的位置互换，其余项保持不变。互换后的新排列记为 $c'$，新的总和记为 $S'$。
    计算两次求和的差值：
    $$S' - S = (a_i c_j + a_j c_i) - (a_i c_i + a_j c_j)$$
    $$S' - S = a_i(c_j - c_i) + a_j(c_i - c_j)$$
    提取公因式 $(c_i - c_j)$：
    $$S' - S = (a_j - a_i)(c_i - c_j)$$

3.  **符号判断**：
    *   已知 $i < j \implies a_i \leq a_j \implies (a_j - a_i) \geq 0$。
    *   已知 $c_i > c_j \implies (c_i - c_j) > 0$。
    *   因此，$(a_j - a_i)(c_i - c_j) \geq 0$，即 $S' \geq S$。

4.  **结论与迭代**：
    每当排列中存在逆序对 $(c_i， c_j)$ 时，通过交换这两个数，我们都能得到一个不小于原总和的新和。由于序列是有限的，经过有限次这种“增量调整”，排列最终会变成 $c_1 \leq c_2 \leq \cdots \leq c_n$（即顺序排列），此时总和达到最大值 $S_{max}$。

5.  **逆序和的证明**：
    同理，若要证明 $S_{min} \leq S$，只需在发现 $c_i < c_j$（顺序对）时进行交换，证明每次交换都会使总和减小，直到达到逆序状态。


*   **非完全对称处理**：当式子不具有完全对称性（如循环对称 $a^2b+b^2c+c^2a$）时，利用排序不等式进行“强行排序”需要讨论不同大小关系下的边界，或利用 $a(b-c)^2$ 等项进行平移。

总之，排序不等式建立在"排序"的基础上"，最重要的是"序列"，当我们有了序列才能再处理大小来进行排序，一般高度对称(轮换式)方便使用，在不等式中拆出形式类似的项时需要注意序列之间的关系，最好在一个假设上得出多个序列的大小关系

由排序不等式可以引出切比雪夫不等式:

## Abel 变换与切比雪夫 (Chebyshev)
**Abel 变换**：设 $\{a_n\}$ 和 $\{b_n\}$ 是两个数列，记 $A_k = \sum_{i=1}^k a_i$ 为 $\{a_n\}$ 的前 $k$ 项和，并约定 $A_0 = 0$。则有：
$$\sum_{i=1}^n a_i b_i = A_n b_n - \sum_{i=1}^{n-1} A_i (b_{i+1} - b_i)$$
**证明**：
**第一步：利用前项和替换 $a_i$**
注意到 $a_i = A_i - A_{i-1}$，代入求和式中：
$$\sum_{i=1}^n a_i b_i = \sum_{i=1}^n (A_i - A_{i-1}) b_i$$

**第二步：拆开并重组**
$$\sum_{i=1}^n a_i b_i = (A_1 b_1 + A_2 b_2 + \cdots + A_n b_n) - (A_0 b_1 + A_1 b_2 + \cdots + A_{n-1} b_n)$$
由于 $A_0 = 0$，第二部分的第一项消失。我们将两部分对应项进行平移：
$$\sum_{i=1}^n a_i b_i = A_n b_n + (A_1 b_1 + A_2 b_2 + \cdots + A_{n-1} b_{n-1}) - (A_1 b_2 + A_2 b_3 + \cdots + A_{n-1} b_n)$$

**第三步：提取公因式**
将中间相同的 $A_i$ 项结合：
$$\sum_{i=1}^n a_i b_i = A_n b_n + \sum_{i=1}^{n-1} A_i b_i - \sum_{i=1}^{n-1} A_i b_{i+1}$$
$$\sum_{i=1}^n a_i b_i = A_n b_n - \sum_{i=1}^{n-1} A_i (b_{i+1} - b_i)$$
证毕。

我还看到了一个很直观的可视化证明方法:

<div style="background-color: transparent; text-align: center;">
<svg width="340" height="280" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg">
  <!-- 第一行 -->
  <rect x="230" y="20" width="50" height="50" fill="#98FB98" stroke="#000" stroke-width="2"/>
  <text x="255" y="52" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">a₁</text>
  <text x="290" y="52" font-size="16" font-weight="bold" fill="#666">b₁</text>
  <!-- 第二行 -->
  <rect x="180" y="70" width="50" height="50" fill="#98FB98" stroke="#000" stroke-width="2"/>
  <rect x="230" y="70" width="50" height="50" fill="#87CEEB" stroke="#000" stroke-width="2"/>
  <text x="205" y="102" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">a₂</text>
  <text x="290" y="102" font-size="16" font-weight="bold" fill="#666">b₂</text>
  <!-- 中间行 -->
  <rect x="130" y="120" width="50" height="50" fill="#98FB98" stroke="#000" stroke-width="2"/>
  <rect x="180" y="120" width="100" height="50" fill="#87CEEB" stroke="#000" stroke-width="2"/>
  <text x="155" y="152" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">...</text>
  <text x="290" y="152" font-size="16" font-weight="bold" fill="#666">⋮</text>
  <!-- 第 i 行 -->
  <rect x="80" y="170" width="50" height="50" fill="#98FB98" stroke="#000" stroke-width="2"/>
  <rect x="130" y="170" width="150" height="50" fill="#87CEEB" stroke="#000" stroke-width="2"/>
  <text x="105" y="202" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">aᵢ</text>
  <text x="290" y="202" font-size="16" font-weight="bold" fill="#666">bᵢ</text>
  <!-- 第 n 行 -->
  <rect x="30" y="220" width="50" height="50" fill="#98FB98" stroke="#000" stroke-width="2"/>
  <rect x="80" y="220" width="200" height="50" fill="#87CEEB" stroke="#000" stroke-width="2"/>
  <text x="55" y="252" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">aₙ</text>
  <text x="290" y="252" font-size="16" font-weight="bold" fill="#666">bₙ</text>
</svg>
</div>

**逻辑说明**:

图中每个小格子的面积代表 $a_i \cdot b_j$。

*   **纵向看（按列求和）**：
    第一列（最右）面积为 $a_1(b_1 + b_2 + \dots + b_n)$；
    第二列面积为 $a_2(b_2 + b_3 + \dots + b_n)$；
    以此类推。总面积 $S = \sum_{i=1}^n a_i \left( \sum_{j=i}^n b_j \right)$。

*   **横向看（按行求和）**：
    第一行面积为 $a_1 b_1 = A_1 b_1$；
    第二行面积为 $(a_1 + a_2)b_2 = A_2 b_2$；
    以此类推（其中 $A_k = \sum_{1}^k a_i$）。总面积 $S = \sum_{k=1}^n A_k b_k$。

**结论**：由此可直观导出阿贝尔恒等式的一种常用形式：
$$\sum_{k=1}^n A_k b_k = \sum_{i=1}^n a_i \left( \sum_{j=i}^n b_j \right)$$
由于阿贝尔恒等式中有笔记爱少见的和式，所以当出现一个数列的和时应该考虑阿贝尔，而且由于其本身是恒等式，在放缩时会比一般不等式更好处理


**切比雪夫不等式**：设 $a_1 \le a_2 \le \cdots \le a_n$ 且 $b_1 \le b_2 \le \cdots \le b_n$（即两序列同向有序），则：
    $$n \sum_{i=1}^n a_i b_i \ge \left( \sum_{i=1}^n a_i \right) \left( \sum_{i=1}^n b_i \right)$$
    若两序列反向有序，则不等号反向。

**证明**：
我们考虑以下差值恒等式：
    $$\sum_{i=1}^n \sum_{j=1}^n (a_i - a_j)(b_i - b_j)$$

**第一步：展开双重和**
将括号内项展开：
$$\sum_{i=1}^n \sum_{j=1}^n (a_i b_i - a_i b_j - a_j b_i + a_j b_j)$$
由于 $i$ 和 $j$ 的求和范围相同且是对称的，可以将各项分开求和：
1. $\sum_{i=1}^n \sum_{j=1}^n a_i b_i = n \sum_{i=1}^n a_i b_i$
2. $\sum_{i=1}^n \sum_{j=1}^n a_i b_j = \left( \sum_{i=1}^n a_i \right) \left( \sum_{j=1}^n b_j \right)$
3. $\sum_{i=1}^n \sum_{j=1}^n a_j b_i = \left( \sum_{j=1}^n a_j \right) \left( \sum_{i=1}^n b_i \right)$
4. $\sum_{i=1}^n \sum_{j=1}^n a_j b_j = n \sum_{j=1}^n a_j b_j$

**第二步：整理结果**
合并上述四项：
$$\sum_{i=1}^n \sum_{j=1}^n (a_i - a_j)(b_i - b_j) = 2n \sum_{i=1}^n a_i b_i - 2 \left( \sum_{i=1}^n a_i \right) \left( \sum_{i=1}^n b_i \right)$$

**第三步：符号判定**
*   若 $a_i， b_i$ 同向有序，则对于任何 $i， j$，$(a_i - a_j)$ 与 $(b_i - b_j)$ 符号相同（或同为 0）。
*   因此 $(a_i - a_j)(b_i - b_j) \ge 0$。
*   从而左边双重和 $\ge 0$，推得：
    $$2n \sum a_i b_i \ge 2 \left( \sum a_i \right) \left( \sum b_i \right)$$
两边除以 2 即证。

本质上切比雪夫和排序是类似的，这意味着在高度对称的情况应该也想到切比雪夫

阿贝尔恒等式和切比雪夫都有比较明显的特质，在看到类似没有幂次的$\sum{}{}a_i b_i$形式时应该想到这两个(有幂次的可能是赫尔德不等式)

## 齐次化强拆
*   **使用场景**：当不等式是对称的、齐次的，且变量较少（2-3个）时。
*   **方法**：直接展开合并再处理单项

我倒觉得这不是很像一个方法，在遇到困难的乘积的时候看不出来怎处理，也许可以拆开来再单独处理

# 最后一点
做任何题目的时候，先猜取等点，什么时候整个式子取得等号?

这个可以帮助判断证明方向的正确与否，如果看不出来，在证明时一定要注意随时取得取等点的信息

