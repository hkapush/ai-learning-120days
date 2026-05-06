# Day 4 学习记录：NumPy 基础

## 今日完成

- 完成了一维数组、二维数组、逐元素运算、均值求和和广播机制的基础练习。
- 成功运行了 `NumPy` 示例代码，理解了 `ndarray` 与普通 `list` 的关键区别。
- 回答了 Day-004 的课堂检查题，并修正了二维索引的一个小细节。

## 核心笔记

- `NumPy` 的核心价值是高效处理数值数组和矩阵，而不是通用容器。
- Python `list` 的 `+` 是拼接；`NumPy array` 的 `+` 是逐元素相加。
- `a * b` 在 `NumPy` 中是逐元素相乘，这种行为对后续向量和矩阵计算非常重要。
- `shape` 用来表示数组形状，例如 `(2, 3)` 表示 2 行 3 列。
- 在 AI 场景里，也可以把 `(2, 3)` 理解为 2 条样本、每条样本 3 个值。
- `matrix[0]` 取第 0 行；`matrix[0, 1]` 取第 0 行第 1 列，值为 `2`。这里要始终记住 Python/NumPy 从 `0` 开始计数。
- 广播机制可以让一个标量或较小形状的数组，按规则扩展后参与运算，例如 `matrix + 10`。
- 后续在 AI 学习中，`NumPy` 主要会用于向量、特征矩阵、embedding、batch 数据等数值处理。

## 代码/实验结果

- 编写代码：

```python
import numpy as np

a = np.array([1,2,3])
b = np.array([4,5,6])

print("a =", a)
print("b =", b)
print("a + b =", a + b)
print("a * b =", a * b)
print("mean of a =", a.mean())
print("sum of b =", b.sum())

matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print("matrix =")
print(matrix)
print("shape =", matrix.shape)
print("first row =", matrix[0])
print("first row second col =", matrix[0][1])
print("first row second col =", matrix[0, 1])


print(matrix + 10)
```

- 运行结果：

```text
a = [1 2 3]
b = [4 5 6]
a + b = [5 7 9]
a * b = [ 4 10 18]
mean of a = 2.0
sum of b = 15
matrix =
[[1 2 3]
 [4 5 6]]
shape = (2, 3)
first row = [1 2 3]
first row second col = 2
first row second col = 2
[[11 12 13]
 [14 15 16]]
```

- 结果说明：
  逐元素运算、二维索引和广播都成功跑通，Day-004 的核心练习已完成。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 对二维索引的口头表达有一点偏差 | 把 `matrix[0, 1]` 说成了“第 2 列” | 修正为：`matrix[0, 1]` 是第 0 行第 1 列，值为 `2` |
| 对 `shape` 的理解还需要和 AI 场景挂钩 | 目前更偏矩阵视角 | 补充理解为：行可以看作样本，列可以看作特征/维度 |

## 面试表达

今天这个主题可以这样讲：

> 我理解 NumPy 的核心价值是高效的数组和矩阵计算，能够处理逐元素运算、切片、形状管理和广播机制。这些能力会直接用于后续特征处理、张量理解以及模型输入输出的组织。

## 明日准备

- 进入 Day-005，学习 `Pandas` 的 `Series` 和 `DataFrame`。
- 从纯数值数组切换到表格数据处理，为机器学习数据清洗和分析做准备。
