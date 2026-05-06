# Day 6 学习记录：数据可视化

## 今日完成

- 完成了柱状图、折线图、散点图三类基础图表的练习。
- 能够根据图表类型解释“比较、趋势、关系”三类信息。
- 完成了图表保存和坐标标注的升级练习，图像已成功输出到 `outputs/` 目录。

## 核心笔记

- 数据可视化的目标不是“画图好看”，而是更快看出数据中的比较关系、趋势变化和变量关系。
- 柱状图适合比较不同类别之间的差异，例如不同学生的分数。
- 折线图适合看趋势变化，例如训练过程中的 `loss` 或准确率随时间变化。
- 散点图适合看两个变量之间是否存在关系，例如学习时长和成绩是否正相关。
- `plt.show()` 用于展示图像；`plt.savefig()` 用于把图保存到本地目录，后续在项目汇报和实验记录里非常重要。
- `plt.text()` 可以给图中的点加标注，提高可读性。
- 在 AI 学习里，数据可视化后续会用于 EDA、训练曲线分析、评测结果展示和异常点观察。

## 代码/实验结果

- 初始练习中完成了三类图表：

```python
import matplotlib.pyplot as plt

# names = ["hka","tom","alice"]
# scores = [90,82,95]

# plt.bar(names,scores)
# plt.title("Students Scores")
# plt.xlabel("Name")
# plt.ylabel("Score")
# plt.show()


# days = [1, 2, 3, 4, 5]
# loss = [0.9, 0.7, 0.55, 0.4, 0.3]

# plt.figure()
# plt.plot(days, loss, marker="o")
# plt.title("Training Loss")
# plt.xlabel("Day")
# plt.ylabel("Loss")
# plt.show()

hours = [1, 2, 3, 4, 5]
scores = [60, 70, 75, 88, 95]

plt.figure()
plt.scatter(hours, scores)
plt.title("Study Hours vs Score")
plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.show()
```

- 对图表的理解：
  第一张图是柱状图，横轴是名字，纵轴是分数。  
  第二张图是趋势下降的折线图。  
  第三张图是散点图，整体趋势向上。

- 升级练习已跑通：
  已完成 `plt.savefig()` 和 `plt.text()` 的使用，确认 `outputs/` 中成功生成图像文件。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 初始阶段更关注“图能否画出来”，还没有完全建立“为什么选这种图”的意识 | 对图表类型和分析目的的对应关系还在建立中 | 通过课堂讲解明确：柱状图看比较、折线图看趋势、散点图看关系 |
| 一开始只停留在 `show()` | 还没有把图表当成项目产出物 | 通过 `savefig()` 把图保存到 `outputs/`，开始形成实验留痕意识 |

## 面试表达

今天这个主题可以这样讲：

> 我可以使用 `Matplotlib` 绘制基础图表，包括柱状图、折线图和散点图，并根据图表判断类别差异、趋势变化和变量关系。在后续 AI 项目中，这类能力会直接用于数据探索、训练曲线分析和评测结果展示。

## 明日准备

- 进入 Day-007，完成第 1 周复盘。
- 把这周学过的环境、Python 工程写法、NumPy、Pandas 和数据可视化串成一个阶段总结。
