# Day 22 学习资料：特征工程

## 你今天要学会什么

掌握基础特征处理

## 核心概念

- 机器学习的核心闭环是：定义任务、准备数据、训练模型、评估指标、分析错误、迭代改进。
- 不要只追求准确率。不同业务会关心召回率、精确率、F1、AUC、延迟、可解释性和维护成本。
- 特征工程和数据质量通常比换模型更重要。先确认数据有没有泄漏、缺失、异常和分布偏移。

## 学习步骤

1. 先画出今天算法的输入、输出、损失函数或划分规则。
2. 用 sklearn 跑一个最小示例，理解 fit/predict/score 的流程。
3. 记录至少 2 个参数对结果的影响，例如树深、学习率、正则化强度。

## 推荐资料

- scikit-learn User Guide: https://scikit-learn.org/stable/user_guide.html
- Google Machine Learning Crash Course: https://developers.google.com/machine-learning/crash-course
- Kaggle Learn Machine Learning: https://www.kaggle.com/learn/intro-to-machine-learning
- LightGBM Documentation: https://lightgbm.readthedocs.io/
- XGBoost Documentation: https://xgboost.readthedocs.io/

## 今日任务拆解

### 任务 1: 处理缺失值、类别变量、标准化

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 2: 构建训练 pipeline

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 3: 比较处理前后效果

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。


## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. 特征工程 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
