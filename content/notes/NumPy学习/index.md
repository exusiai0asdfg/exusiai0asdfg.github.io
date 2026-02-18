+++
title = "NumPy学习1"
date = "2026-02-18T13:58:00+08:00"
draft = false
[article]
showHero = true
heroStyle = "background"
+++
# numpy学习
<font face="黑体" color="blue" size="4">请注意,numpy的正确写法为NumPy,为number与python的缩写,以下将简写</font>
本文章包含我的学习路程记录和个人思考，学习,主要参考了
- [菜鸟教程](https://www.runoob.com/numpy/numpy-tutorial.html "numpy")
- [Markdown 教程](https://markdown.com.cn/)
- [Gemini](https://gemini.google.com/)
- [Chatgpt](https://chatgpt.com/)
- [DeepSeek](https://chat.deepseek.com/)
## Ndarray对象
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
numpy组成的重要部分和基石是$N$维数组（Ndarray），关于数组有如下操作
- 创建一维数组
```python
    import numpy as np
    a=np.array([1,2,3])
```
- 创建多维数组
```python
    import numpy as np
    a=np.array([[1,2,3],[1,2,3]])
```
值得注意的是，每多一个维度，就会多一层括号包裹
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
有的时候，我们希望指定数组的数据类型，可以使用`dtype`对象进行赋值
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

函数会输输入两个数组,将会返回这两个数组的笛卡尔积,即直积,
写作$X*Y$,第一个对象是X的成员而第二个对象是 Y 的所有可能有序对的其中一个成员,比如对于$A={a,b}$,$B={0,1,2}$,则有
$$A×B={(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}
B×A={(0, a), (0, b), (1, a), (1, b), (2, a), (2, b)}$$
