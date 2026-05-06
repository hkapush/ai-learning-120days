# Day 36 学习资料：过拟合与正则化

## 你今天要学会什么

能识别和缓解过拟合

## 核心概念

- 深度学习研发的基本单元是：数据集、模型、损失函数、优化器、训练循环、评估循环、保存与加载。
- PyTorch 的关键是张量 shape 和梯度流。绝大多数 bug 都能从 shape、device、dtype、requires_grad 这几处查起。
- 训练不是跑起来就结束，要看 loss 曲线、验证集指标、过拟合程度和错误样例。

## 学习步骤

1. 先读懂一个最小 PyTorch 训练脚本，标注每一行属于数据、模型、损失、优化还是评估。
2. 运行实验时记录随机种子、batch size、学习率、epoch、设备和最终指标。
3. 如果使用预训练模型，写清楚冻结了哪些层、训练了哪些层、为什么这样做。

## 推荐资料

- PyTorch Tutorials: https://pytorch.org/tutorials/
- PyTorch Documentation: https://pytorch.org/docs/stable/index.html
- TorchVision Docs: https://pytorch.org/vision/stable/index.html
- Hugging Face NLP Course: https://huggingface.co/learn/nlp-course/
- Dive into Deep Learning: https://d2l.ai/

## 今日任务拆解

### 任务 1: 学习 dropout、weight decay

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 2: 做过拟合实验

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 3: 加入早停

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。


## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. 过拟合与正则化 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
