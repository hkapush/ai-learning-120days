# Day 100 学习资料：VLM/图像模型推理

## 你今天要学会什么

跑通多模态 baseline

## 核心概念

- 大模型学习要抓住四条线：模型结构、训练数据、训练/对齐方法、推理与部署效率。
- Transformer 的核心是注意力机制；LLM 工程的核心是数据、上下文管理、评测和成本控制。
- 微调不是万能药。很多业务问题优先考虑 prompt、RAG、工具调用和评测集，再决定是否训练。

## 学习步骤

1. 画出今天主题在 LLM 全链路中的位置：预训练、后训练、应用、评测或部署。
2. 读一个开源项目的配置文件，理解模型大小、上下文长度、tokenizer、训练参数。
3. 把概念写成面试回答：是什么、为什么需要、怎么实现、有什么坑。

## 推荐资料

- Hugging Face Transformers Docs: https://huggingface.co/docs/transformers/index
- Hugging Face PEFT Docs: https://huggingface.co/docs/peft/index
- TRL Documentation: https://huggingface.co/docs/trl/index
- LLaMA-Factory: https://github.com/hiyouga/LLaMA-Factory
- The Illustrated Transformer: https://jalammar.github.io/illustrated-transformer/

## 今日任务拆解

### 任务 1: 调用开源 VLM 或 CV 模型

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 2: 完成批量推理

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 3: 记录错误样例

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。


## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. VLM/图像模型推理 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
