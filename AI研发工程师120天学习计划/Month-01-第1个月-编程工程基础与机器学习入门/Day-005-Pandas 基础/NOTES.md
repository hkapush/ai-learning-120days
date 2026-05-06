# Day 5 学习记录：Pandas 基础

## 今日完成

- 完成了 `DataFrame` 和 `Series` 的基础练习。
- 成功运行了列选择、条件筛选、列统计、新增字段和列级批量运算。
- 回答了 Day-005 的课堂检查题，形成了对结构化表格数据处理的基本理解。

## 核心笔记

- `Pandas` 更适合处理带字段名的结构化表格数据，而 `NumPy` 更偏向数值数组和矩阵。
- `DataFrame` 是二维结构化表格；`Series` 是其中的一维列数据。
- `df["name"]` 会取出一列数据，这一列本质上是 `Series`。
- `df["score"].mean()` 可以直接求平均值，因为 `Series` 自带聚合方法。
- `df[df["score"] > 85]` 是条件过滤，会返回满足条件的子表格。
- `df[["name", "score"]]` 可以选择多列组成一个新的子表格。
- `df["score_level"] = ...` 表示新增一列。
- `df["score"] = df["score"] + 5` 不需要自己写循环，因为 Pandas 支持列级向量化运算。
- 后续在 AI 学习里，Pandas 会大量用于训练数据、评测结果、CSV 样本表、特征表和日志统计表的处理。

## 代码/实验结果

- 编写代码：

```python
import pandas as pd

data = {
    "name":["hka","tom","alice"],
    "score":[90,82,95],
    "city":["Hangzhou","Shanghai","Beijing"]
}

df = pd.DataFrame(data)

print(df)
print(type(df))
print(df["name"])
print(df["score"].mean())

print(df[df["score"] > 85])
print(df[["name", "score"]])

df["score_level"] = ["A", "B", "A"]
print(df)

df["score"] = df["score"] + 5
print(df)
```

- 运行结果：

```text
    name  score      city
0    hka     90  Hangzhou
1    tom     82  Shanghai
2  alice     95   Beijing
<class 'pandas.core.frame.DataFrame'>
0      hka
1      tom
2    alice
Name: name, dtype: object
89.0
    name  score      city
0    hka     90  Hangzhou
2  alice     95   Beijing
    name  score
0    hka     90
1    tom     82
2  alice     95
    name  score      city score_level
0    hka     90  Hangzhou           A
1    tom     82  Shanghai           B
2  alice     95   Beijing           A
    name  score      city score_level
0    hka     95  Hangzhou           A
1    tom     87  Shanghai           B
2  alice    100   Beijing           A
```

- 结果说明：
  所有核心操作都已跑通，说明对 Pandas 基础表格处理已经具备可操作能力。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 对 `Series` 为什么能直接调用 `.mean()` 的理解还比较直觉化 | 目前主要从“这一列可以操作”来理解 | 补充为：`Series` 本身就是 Pandas 的一维数据结构，内置统计方法 |
| 对“不写循环为什么也能整列加 5”的机制理解还较粗 | 还没完全建立向量化运算的概念 | 先记住是列级批量运算，后面在 NumPy/PyTorch 中继续强化这种思维 |

## 面试表达

今天这个主题可以这样讲：

> 我能使用 Pandas 处理结构化表格数据，包括构造 DataFrame、列选择、条件筛选、列级统计、新增字段和批量字段变换。这类能力后续会直接用于数据清洗、特征整理和评测结果分析。

## 明日准备

- 进入 Day-006，学习 `Matplotlib` 和基础数据可视化。
- 重点从“会处理数据”走向“能看懂数据、展示数据”。
