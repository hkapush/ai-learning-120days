# 课程环境说明

## 推荐做法

这套 120 天课程建议使用 `Python 3.12` 创建虚拟环境，而不是直接使用你现在的 `Python 3.14.2`。

原因很简单：

- `NumPy` 和 `pandas` 已经支持 Python 3.14。
- 但 `PyTorch` 在 macOS 官方安装页仍推荐使用 `Python 3.9-3.12`。
- 我们后面的 `PyTorch / Transformers / 大模型微调 / RAG` 课程都会依赖这一套环境。

所以最稳妥的做法是：

1. 安装一个 `Python 3.12`
2. 用它创建虚拟环境
3. 再安装根目录下的 `requirements.txt`

## 创建虚拟环境

如果你本机已经有 `python3.12`：

```bash
cd "/Users/hekanang/Documents/New project 2"
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

## 验证安装

```bash
python -c "import numpy, pandas, sklearn, torch, transformers; print('ok')"
```

如果这条命令输出 `ok`，说明课程核心环境基本就绪。

## 说明

- `torch/torchvision/torchaudio` 没有在 `requirements.txt` 中写死版本，是为了让 `pip` 按你的平台选取兼容版本。
- 这份依赖是“课程全程通用环境”，不是每一天都会立刻用到所有包。
- 如果你后面遇到某个包在 macOS 上安装慢或者失败，我们再按当天课程拆分处理，不会卡死整个学习节奏。
