+++
title = "NumPy学习1"
date = "2026-02-18T13:58:00+08:00"
draft = false
[article]
showHero = true
heroStyle = "background"
+++
# numpy学习
<font face="黑体" color="yellow" size="4">请注意,numpy的正确写法为NumPy,为number与python的缩写,以下将简写</font>
本文章包含我的学习路程记录和个人思考，学习,主要参考了
- [菜鸟教程](https://www.runoob.com/numpy/numpy-tutorial.html "numpy")
- [Markdown 教程](https://markdown.com.cn/)
- [Gemini](https://gemini.google.com/)
- [Chatgpt](https://chatgpt.com/)
- [DeepSeek](https://chat.deepseek.com/)

## Ndarray对象

### 基本介绍
在numpy中最重要的基本元素为`ndarry`,这是一个$N$维的数组容器,需要满足同质即内部元素数据类型必须相同,我们可以通过`shape`(形状)和`axis`(轴)来描述:
1. shape
shape的元素类型一般是元组,我们通过形状描述数组的维数情况,比如
- 标量:(),对于任意标量shape为空元组
- 一维数组:(n,)包含n个元素,比如`[1,2,3]`就可以表示为(3,)
- 二维数组:(m,n)包含m行,n列,类似于矩阵,比如`[[2,3,4],[4,5,6]]`可以认为是矩阵$\begin{bmatrix}
2 & 3 & 4 \\
4 & 5 & 6
\end{bmatrix}$,表示为(2,3)
- 三维数组:(p,m,n)包含p层,每层m行n列,比如`[[[1,2,3],[2,3,4]], [[2,3,4],[3,4,5]]]`是一个(2,2,3)的数组
我们注意到三维数组已经比较难构造和数shape了,所以在后面我们将给出生成数组和计算shape的语法
2. 轴
为方便,我们为每个维度都进行编号,从0开始,每个轴对应一个元组位置,$N$维数组最后一个轴为$N-1$

比如对于二维数组(矩阵):
- 轴 0 通常称为行方向，长度为行数
- 轴 1 通常称为列方向，长度为列数
3. 内存布局
NumPy数组在内存中按行优先（C风格）存储，即最后面的轴在内存中是连续的。也可以通过 order='F' 指定列优先（Fortran风格）

这个我也不知道暂时有什么什么用,也许后面会有用
### 创建数组
- `numpy.empty`
可以通过如`numpy.empty(shape,dtype=int)`来创建一个指定形状（shape）、数据类型（dtype）且未初始化的数组，此时数组中的元素将被赋值为该类型的随机内容，即未初始化
- 指定填充数组
我们可以通过`numpy.zeros`和`numpy.ones`创建指定大小的数组，数组元素以0或1来填充。
```python
    numpy.zeros(shape, dtype = float, order = 'C')
    numpy.ones(shape, dtype = None, order = 'C')
```
也可以使用`numpy.zeros_like`，`numpy.ones_like`其与上面两个的区别为类型与某给定数组（如下a）一致。
```python
    numpy.zeros_like(a, dtype=None, order='K', subok=True, shape=None)
    numpy.ones_like(a, dtype=None, order='K', subok=True, shape=None)
```
### 从已有数据类型创建数组
- ` numpy.asarray`
可以从任意形式输入参数，可以是列表, 列表的元组, 元组, 元组的元组, 元组的列表，多维数组
```python
    numpy.asarray(a, dtype = None, order = None)
```
- `numpy.arange`
类似于`range`操作,根据start 与 stop 指定的范围以及 step 设定的步长，生成一个 ndarray
```python
    numpy.asarray(a, dtype = None, order = None)
```
- `numpy.linspace`
遍历创造一个等差数列
```python
    np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
```
其中,`retstep`为是否显示数列差,以二元元组的形式和数组一起返回
- `numpy.logspace`
遍历创造一个等比数列
```python
   np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
```
注意,起始和终止是$base^{start}$和$base^{stop}$,`base`为底数.
### 基本操作
关于数组有如下操作:
- 指定最小维度
```python
    import numpy as np
    a=np.array([1,2,3],ndmin=2)
```
注意到我们创建的内容只有一对括号包裹，但是由于指定了二维（`ndmin=2`）,此时`a=[[1,2,3]]`
- `dtype`对象
```python
    import numpy as np
    a=np.array([1,2,3],dtype=float)
```
此时数组中元素类型从本来的int变为了float.有的时候，我们希望指定数组的数据类型，可以使用`dtype`对象进行赋值
### 常见的对象属性
| 数据类型 | 作用 |
| :----:| :----: |  
| `ndarray.ndim` | 数组的维度数量 | 
| `ndarray.shape` | 返回一个元组，长度就是维度的数目 | 
| `ndarray.size` | 数组中元素的总个数，等于 ndarray.shape 中各个轴上大小的乘积 |
| `ndarray.real` | 数组中每个元素的实部（如果元素类型为复数） |
| `ndarray.imag` | 数组中每个元素的虚部 |

也可以通过`reshape`来调整数组大小
```python
    import numpy as np 
    a = np.array([[1,2,3],[4,5,6]]) 
    b = a.reshape(3,2)  
```
### 切片与索引
- `slice`
一般配合`arange`使用
```python
    import numpy as np 
    a = np.arange(10)
    s = slice(2,7,2)   # 从索引 2 开始到索引 7 停止，间隔为2
   #也可以使用[2:7:2],同理 
    print (a[s])
```
对于冒号
1. 如果只放置一个参数，如[2],将返回与该索引相对应的单个元素。
2. 如果为 [2:]，表示从该索引开始以后的所有项都将被提取。
3. 如果使用了两个参数，如 [2:7]，那么则提取两个索引(不包括停止索引)之间的项。
为了简便,还可以使用...来代指维度,如
```python
    import numpy as np 
    a = np.array([[1,2,3],[3,4,5],[4,5,6]])  
    print (a[...,1])   # 第2列所有元素,用...代指1,2,3行
    print (a[1,...])   # 第2行所有元素
    print (a[...,1:])  # 第2列及剩下的所有元素
```
### 高级搜索
- 整数数组索引
```python
    import numpy as np 
    x = np.array([[1,  2],  [3,  4],  [5,  6]]) 
    y = x[[0,1,2],  [0,1,0]]  
    print (y)
```
通过$
 \begin{pmatrix}
    0 & 1 & 2 \\
    0 & 1 & 0
    \end{pmatrix}
$可以得到(0,0),(1,1),(2,0)位置处元素
当然,也有一些比较~~华而不实的~~操作,比如如下
```python
import numpy as np 
x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])  
rows = np.array([[0,0],[3,3]]) 
cols = np.array([[0,2],[0,2]]) 
y = x[rows,cols]  
print  ('这个数组的四个角元素是：')
print (y)
```
这段代码比较难懂(至少我第一次没看懂),下面我们来分解一下

对于原矩阵$ 
\begin{bmatrix}
0 & 1 & 2 \\
3 & 4 & 5 \\
6 & 7 & 8 \\
9 & 10 & 11
\end{bmatrix}
$,四个角为`[0 2 9 11]`,而给出了行和列索引通过如下计算的得到
| 结果矩阵的位置 | 行索引 (来自 rows) | 列索引 (来自 cols) | 坐标 | 从 x 中取出的值 |
| --- | --- | --- | --- | --- |
| (0,0) | rows[0,0] = 0 | cols[0,0] = 0 | (0,0) | x[0,0] = 0 |
| (0,1) | rows[0,1] = 0 | cols[0,1] = 2 | (0,2) | x[0,2] = 2 |
| (1,0) | rows[1,0] = 3 | cols[1,0] = 0 | (3,0) | x[3,0] = 9 |
| (1,1) | rows[1,1] = 3 | cols[1,1] = 2 | (3,2) | x[3,2] = 11 |

然而我们可以通过更简单的方法实现,最简单的是如下`reshape`
```python
import numpy as np
y = x[[0, 0, 3, 3], [0, 2, 0, 2]].reshape(2, 2)
print(y)
```
当然也可以使用函数`np._ix`,如下
```python
import numpy as np
rows = [0, 3]
cols = [0, 2]
y = x[np.ix_(rows, cols)]
print(y)
```
### 布尔索引
我们可以通过布尔索引来在数组中搜索
比如获取大于4的数的位置
```python
import numpy as np 
x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])  
print  ('大于 4 的元素是：')
print (x[x >  4])
```
类似的,含有一些函数可以到过滤的作用,比如
```python
np.isnan() #滤去NaN(numpy库中代指缺失的元素)
np.iscomplex() #滤去非复数元素
```

### 花式索引

- 区别
花式索引和一般索引的表示区别核心在于其操作不影响原数组内容,直接复制到新的数组之中.而形式上索引方式,花式索引使用整数数组（列表、ndarray）或布尔数组,而一般的直接使用使用 start:stop:step 形式，或整数、...形式

对于一维数组直接在轴上取值,而多维数组则就是对应下标的行,如下
```python
import numpy as np
x = np.arange(9)  # x = [0 1 2 3 4 5 6 7 8]
x2 = x[[0, 6]]    # x2 = [0 6]
x3 = np.arange(32).reshape((8,4)) 
# x =  [[ 0  1  2  3]
#       [ 4  5  6  7]
#       [ 8  9 10 11]
#       [12 13 14 15]
#       [16 17 18 19]
#       [20 21 22 23]
#       [24 25 26 27]
#       [28 29 30 31]]
x4 = x3[[4,2,1,7]]
# x4 = [[16 17 18 19]
#       [ 8  9 10 11]
#       [ 4  5  6  7]
#       [28 29 30 31]]
```
其中的位置也可以进行负索引,与列表类似

接下来可以详细讲讲刚刚提到的`np.ix_`

函数会输输入两个数组,将会返回这两个数组的笛卡尔积,即直积,写作$X*Y$,第一个对象是X的成员而第二个对象是 Y 的所有可能有序对的其中一个成员,比如对于$A={a,b}$,$B={0,1,2}$,则有
$$A×B={(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}
B×A={(0, a), (0, b), (1, a), (1, b), (2, a), (2, b)}$$


以上是将ndarry看做数组后的操作,接下来,我们将把ndarry看作矩阵进行运算

### 访问元素

接下来我们介绍迭代对象` numpy.nditer `,它提供了一种灵活访问一个或者多个数组元素的方式
- 访问元素
我们可以以各种顺序访问
```python
import numpy as np
a = np.arange(6).reshape(2,3)     
b = a.T
c = b.copy(order='C')  
d = b.copy(order='F') 
print(a)
print ('\n')
print(b)
print ('\n')
print(c)
print ('\n')
print(d)
for x in np.nditer(a):            #(1)
    print (x, end=", " )
print ('\n')
for x in np.nditer(b):            #(2)
    print (x, end=", " )
print ('\n')
for x in np.nditer(c):            #(3)  
    print (x, end=", " )
print  ('\n') 
for x in np.nditer(d):            #(4)
    print (x, end=", " )



```
## 广播
虽然这个名字起的有点奇怪,但是学完之后就会大致理解所谓"broadcast"

首先我们给出定义,*广播(Broadcast)*是 numpy 对不同形状(shape)的数组进行数值计算的方式， 对数组的算术运算通常在相应的元素上进行.
- 当`a.shape == b.shape`时,在进行$a*b$运算时,由于维数相同，且各维度的长度相同,我们可以用直接将对应位相乘
- 而当两者的`shape`不同时,numpy将自动触发广播机制,比如下:
```python
import numpy as np 
a = np.array([[ 0, 0, 0],
           [10,10,10],
           [20,20,20],
           [30,30,30]])
b = np.array([0,1,2])
print(a + b)
```
答案会是什么呢?读者不妨自己尝试复制跑一下

此时的广播就进行了如下操作,为使$b$可以和$b$运算,我们将b从$\begin{bmatrix}
0 & 1 & 2 
\end{bmatrix}$进行一个二维复制运动,$b'$变为$\begin{bmatrix}
0 & 1 & 2 \\
0 & 1 & 2 \\
0 & 1 & 2 \\
0 & 1 & 2 
\end{bmatrix}$从而使得a,b可以相加

针对于刚刚的例子,我们将给出广播操作的规则:
- 让所有输入数组都向其中形状最长的数组看齐，形状中不足的部分都通过在前面加 1 补齐。

当参与运算的数组维度不同时，NumPy会将维度较少的数组的形状前面补1，直到所有数组的维度数相同。这里的“前面”指的是形状元组的起始位置（即轴索引较小的位置）。

- 输出数组的形状是输入数组形状的各个维度上的最大值。

在补齐维度后，输出数组的每个维度的大小取所有输入数组在该维度上的最大值。这意味着最终结果将具有能够容纳所有输入数组的最大尺寸。

- 如果输入数组的某个维度和输出数组的对应维度的长度相同或者其长度为 1 时，这个数组能够用来计算，否则出错。

在确定了输出形状后，需要检查每个输入数组的每个维度是否与输出形状兼容。兼容的条件是该维度的大小要么等于输出维度的大小，要么等于1。如果某个维度既不等于输出维度也不等于1，则广播失败，抛出错误。

- 当输入数组的某个维度的长度为 1 时，沿着此维度运算时都用此维度上的第一组值。

如果某个数组在某个维度上的大小为1，那么在该维度上，这个数组实际上会被“拉伸”以匹配输出大小。拉伸的方式是重复使用该维度上仅有的一个元素（或子数组）。注意，这里“第一组值”指的是该维度上唯一的那个切片。

为方便理解,我们给出几个例子描述广播过程
- 二维数组与一维数组相加
```python
import numpy as np
a = np.array([[1, 2, 3],
              [4, 5, 6]])   #(2,3)
b = np.array([10, 20, 30])  #(3,)
c = a + b
print(c)
#c=[[11 22 33]
#  [14 25 36]]
```
广播过程：
1. B 前面补1 -> (1, 3)
2. 输出形状取 max: (2, 3)
3. 检查兼容：A(2,3) 匹配，B(1,3) 第0维为1，兼容
4. B 的第0维拉伸为2，即相当于将 B 重复成 [[10,20,30], [10,20,30]]
以下是四个广播示例的完整演示，采用您指定的格式：

- 二维数组与列向量相加
```python
import numpy as np
A = np.array([[1, 2, 3],
              [4, 5, 6]])   #(2, 3)
C = np.array([[10],
              [20]])        #(2, 1)
D = A + C
print(D)
# 输出：
# [[11 12 13]
#  [24 25 26]]
```
广播过程：
1. 两数组维度相同（均为2），无需补1
2. 输出形状取 `max( (2,3), (2,1) )` → `(2, 3)`
3. 检查兼容：`A(2,3)` 匹配输出；`C(2,1)` 第1维为1，兼容
4. `C` 的第1维拉伸为3，即相当于将每列复制为3列：
   ```
   [[10, 10, 10],
    [20, 20, 20]]
   ```

- 标量（零维数组）与多维数组相加
```python
import numpy as np
A = np.array([[1, 2, 3],
              [4, 5, 6]])   #(2, 3)
scalar = 5                  #()
E = A + scalar
print(E)
# 输出：
# [[ 6  7  8]
#  [ 9 10 11]]
```
广播过程：
1. 标量形状 `()` 前面补1，直到与 `A` 维度相同 → `(1, 1)`
2. 输出形状取 `max( (2,3), (1,1) )` → `(2, 3)`
3. 检查兼容：`A(2,3)` 匹配输出；标量 `(1,1)` 各维均为1，兼容
4. 标量被拉伸为 `(2,3)` 的全5数组：
   ```
   [[5, 5, 5],
    [5, 5, 5]]
   ```
- 不兼容的情况（形状无法广播）
```python
import numpy as np
A = np.array([[1, 2, 3],
              [4, 5, 6]])   #(2, 3)
D = np.array([10, 20])      #(2,)
F = A + D
print(F)
```
广播过程：
1. `D` 前面补1 → `(1, 2)`
2. 输出形状取 `max( (2,3), (1,2) )` → `(2, 3)`
3. 检查兼容：`A(2,3)` 匹配输出；`D(1,2)` 的第0维为1（兼容），但第1维为2，而输出第1维为3，2既不等于3也不等于1，因此**不兼容**，引发 `ValueError`。

<font face="黑体" color="red" size="4">请注意,以上所用的*并不代表二维的矩阵乘法,若想使用矩阵乘法,请使用@作为运算符</font>
 
现在广播已经讲完,我们可以来想一想,这个操作为什么叫广播?
官方文档中有解释为
> "Subject to certain constraints, the smaller array is 'broadcast' across the larger array so that they have compatible shapes."
> 在满足特定约束条件下，较小的数组被广播到较大的数组上，使它们具有兼容的形状.

这里的核心意象是：像无线电信号一样，把较小的数组"传播"到较大数组的每一个位置。

这也精确描述了这个操作的核心,将数组形状容易的改变以满足运算
