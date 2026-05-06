# Day 80 学习资料：RAG 评测

## 你今天要学会什么

建立 RAG 评测集

## 核心概念

- RAG 的目标是让模型基于外部知识回答，而不是凭参数记忆硬猜。
- RAG 质量主要取决于文档解析、chunk 策略、embedding、召回、重排、上下文拼接和评测。
- 判断 RAG 好坏不能只看回答顺不顺，要看引用是否命中、事实是否可追溯、检索是否稳定。

## 学习步骤

1. 把 RAG 流程画成 6 步：load、split、embed、retrieve、rerank、generate。
2. 对比不同 chunk size 和 overlap 的检索效果。
3. 设计答案格式，要求模型必须给出引用片段或来源。

## 推荐资料

- LangChain RAG Tutorial: https://python.langchain.com/docs/tutorials/rag/
- LlamaIndex Documentation: https://docs.llamaindex.ai/
- FAISS Wiki: https://github.com/facebookresearch/faiss/wiki
- Milvus Docs: https://milvus.io/docs
- Sentence Transformers Docs: https://sbert.net/

## 今日任务拆解

### 任务 1: 设计 30 个问答样例

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 2: 评估准确率/召回率/幻觉

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 3: 记录 badcase

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。


## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. RAG 评测 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
