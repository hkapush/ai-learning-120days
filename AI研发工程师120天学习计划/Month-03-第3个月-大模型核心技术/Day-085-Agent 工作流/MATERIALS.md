# Day 85 学习资料：Agent 工作流

## 你今天要学会什么

完成多步任务 Agent

## 核心概念

- Agent 是让模型在目标、工具、状态和反馈之间循环决策的系统，不只是一个更长的 prompt。
- 稳定 Agent 需要控制工具权限、步骤上限、错误重试、状态记录和评测任务集。
- 真实业务里，Agent 的成功率、耗时、成本和失败可解释性往往比炫酷能力更重要。

## 学习步骤

1. 定义 Agent 的任务边界：它能做什么、不能做什么、失败时如何退出。
2. 列出工具 schema：工具名、输入、输出、异常、示例。
3. 观察每一步 reasoning/action/observation，找出失败发生在哪个环节。

## 推荐资料

- LangGraph Documentation: https://langchain-ai.github.io/langgraph/
- LangChain Tool Calling: https://python.langchain.com/docs/concepts/tool_calling/
- OpenAI Function Calling Guide: https://platform.openai.com/docs/guides/function-calling
- ReAct Paper: https://arxiv.org/abs/2210.03629

## 今日任务拆解

### 任务 1: 用 LangChain/LangGraph 或原生代码实现流程

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 2: 加入错误重试

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。

### 任务 3: 记录状态

- 先用 10-20 分钟理解这个任务的目的。
- 写下输入、输出、关键步骤和可能的坑。
- 动手完成一个最小版本，再补充边界情况。
- 把结果、截图或命令输出记录到 `NOTES.md`。


## 面试化表达

今天结束后，尝试回答这 3 个问题：

1. Agent 工作流 解决的核心问题是什么？
2. 如果把它用在真实 AI 研发项目里，输入、输出和评价指标分别是什么？
3. 你今天的实现或练习有哪些不足，下一步会怎么优化？
