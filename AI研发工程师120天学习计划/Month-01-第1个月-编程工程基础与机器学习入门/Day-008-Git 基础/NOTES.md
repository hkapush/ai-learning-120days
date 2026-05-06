# Day 8 学习记录：Git 基础

## 今日完成

- 通过真实仓库完成了 Git 日常工作流的回顾和整理。
- 查看了当前仓库状态、最近提交历史和远程仓库配置。
- 明确了跨设备学习时最核心的 Git 使用方式。

## 核心笔记

- 当前 Git 工作流已经进入可用状态，不再只是“知道命令”，而是已经在真实学习仓库中使用起来了。
- `git status` 用于查看当前修改状态，包括当前分支、是否与远程同步、哪些文件被修改或暂存。
- `git commit` 是把当前修改保存到本地仓库；`git push` 是把本地提交同步到远程仓库。
- 如果只 `commit` 不 `push`，另一台设备是看不到这些更新的。
- 跨设备学习前，标准动作是先执行 `git pull`，确保本地拿到远程最新内容。
- `origin` 是当前仓库绑定的主远程仓库名。
- `git remote -v` 中 `fetch` 和 `push` 地址相同，说明拉取和推送都使用同一个 GitHub 仓库。
- 日常最重要的 3 句命令是：

```bash
git add .
git commit -m "finish day xxx"
git push
```

## 代码/实验结果

- 执行结果：

```bash
git status
On branch main
Your branch is up to date with 'origin/main'.
```

```bash
git log --oneline -5
b21c796 (HEAD -> main, origin/main) finish day 7
0bd08b1 init ai learning project
```

```bash
git remote -v
origin  https://github.com/hkapush/ai-learning-120days.git (fetch)
origin  https://github.com/hkapush/ai-learning-120days.git (push)
```

- 结果说明：
  本地分支 `main` 已与远程 `origin/main` 同步，学习仓库状态正常，可以支持不同设备之间的持续学习。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 对 `origin` 的 `fetch/push` 含义不熟 | 初次系统理解远程仓库配置 | 补充理解为：`fetch` 表示拉取来源，`push` 表示推送目标；两者相同说明都连到同一个 GitHub 仓库 |

## 面试表达

今天这个主题可以这样讲：

> 我已经可以用 Git 完成日常学习和项目同步，包括查看仓库状态、本地提交、推送远程以及跨设备拉取更新。这让我能在不同设备之间连续维护学习记录和项目版本。

## 明日准备

- 进入 Day-009，学习终端和 Linux 常用命令。
- 重点建立“能在终端高效找文件、看内容、定位问题”的能力。
