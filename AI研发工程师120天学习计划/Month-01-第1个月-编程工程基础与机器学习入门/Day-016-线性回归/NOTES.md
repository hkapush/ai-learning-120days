# Day 16 学习记录：线性回归

## 今日完成

- 完成了第一个真正的机器学习模型实验：线性回归。
- 成功使用 `sklearn` 训练模型、预测结果并绘制拟合直线。
- 理解了 `coef_` 和 `intercept_` 的含义，并初步建立了“拟合一条直线”的直觉。

## 核心笔记

- 线性回归的目标是找一条尽量合适的直线，去描述输入和输出之间的关系。
- 在线性回归里，可以把模型直观理解为：

```text
y = w * x + b
```

- 其中：
  - `w` 表示斜率
  - `b` 表示截距/偏置
- `coef_` 表示输入增加 1 个单位时，预测输出大致增加多少。
- `intercept_` 表示输入为 0 时模型给出的基础输出。
- 线性回归不要求所有点都完美落在一条线上，而是在找“整体最合适的一条直线”。
- 如果数据本身就是完美线性关系，模型预测值就可能和真实值完全一致。

## 代码/实验结果

- 代码：

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# 面积
X = np.array([[50], [60], [70], [80], [90], [100]])
# 房价
y = np.array([150, 180, 210, 240, 270, 300])

model = LinearRegression()
model.fit(X, y)

predictions = model.predict(X)

print("coef =", model.coef_)
print("intercept =", model.intercept_)
print("predictions =", predictions)

plt.scatter(X, y, color="blue", label="real data")
plt.plot(X, predictions, color="red", label="prediction line")
plt.xlabel("Area")
plt.ylabel("Price")
plt.title("Linear Regression Demo")
plt.legend()
plt.show()
```

- 输出结果：

```text
coef = [3.]
intercept = -2.842170943040401e-14
predictions = [150. 180. 210. 240. 270. 300.]
```

- 图像理解：
  图中是几个散点和一条把它们完整拟合起来的直线。

- 结果说明：
  这组数据几乎完美满足 `price = 3 * area`，所以模型能得到接近完美的拟合结果。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 一开始对 `coef_` 的理解还停留在“斜率”这个词本身 | 还没完全和业务含义连接起来 | 补充理解为：输入每增加 1 个单位，输出大致变化多少 |
| 对“点没有都在直线上时还算不算线性回归”有隐含疑问 | 线性回归容易被误解为必须完全共线 | 明确：线性回归是在找整体最合适的直线，而不是要求完美穿过所有点 |

## 面试表达

今天这个主题可以这样讲：

> 我已经完成了线性回归的最小实验，能够用 `sklearn` 训练模型并解释 `coef_` 和 `intercept_` 的含义。我理解线性回归的本质，是用一条尽量合适的直线去拟合输入和输出之间的整体关系，而不是要求所有点严格共线。

## 明日准备

- 进入 Day-017，学习逻辑回归。
- 从预测连续值切换到二分类任务，开始理解分类模型的基本思路。
