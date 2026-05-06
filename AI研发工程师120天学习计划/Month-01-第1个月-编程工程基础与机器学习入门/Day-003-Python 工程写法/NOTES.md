# Day 3 学习记录：Python 工程写法

## 今日完成

- 完成了一个带函数、主入口、异常处理和日志输出的 Python 工程化小脚本。
- 使用 `logging` 替代了简单 `print`，并通过异常捕获处理了除零错误。
- 理解了为什么工程代码要拆函数、写 `main()`、保留入口和记录错误。

## 核心笔记

- 工程写法的目标不是让代码“更复杂”，而是让代码更清晰、更可维护、更容易定位问题。
- `def` 用来封装功能，避免所有逻辑堆在一个文件顶层。
- `main()` 用来承载主流程，这样阅读代码时可以更快抓住程序入口。
- `if __name__ == "__main__":` 表示只有当当前文件被直接运行时，才执行 `main()`；如果这个文件被别的模块导入，就不会自动执行。
- `try/except` 不是为了掩盖错误，而是为了让程序更可控地处理异常。
- `print` 适合临时观察，`logging` 适合正式记录。后续做训练脚本、服务接口和批处理任务时，应优先考虑日志。
- 异常捕获尽量先写更具体的错误类型，例如 `ZeroDivisionError`，比直接捕获 `Exception` 更工程化。

## 代码/实验结果

- 编写代码：

```python
import logging

logging.basicConfig(level = logging.INFO)

def divide_numbers(a,b):
    return a / b

def main():
    try:
        result = divide_numbers(10,0)
        logging.info(f"result = {result}")
        
    except Exception as e:
        logging.error(f"error:{e}")
    

if __name__ == "__main__":
    main()
```

- 运行结果：

```text
ERROR:root:error:division by zero
```

- 结果说明：
  代码没有直接崩掉，而是成功捕获了异常并输出日志，说明异常处理逻辑是生效的。
- 可优化点：
  `logging.basicConfig(level=logging.INFO)` 的写法更常见；同时这里可以优先捕获 `ZeroDivisionError`。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| `10 / 0` 触发除零报错 | 除数不能为 0 | 用 `try/except` 捕获异常，并通过 `logging.error()` 记录错误信息 |
| 日志写法还不够工程化 | 一开始直接捕获了宽泛的 `Exception` | 后续优先按具体错误类型捕获，例如 `ZeroDivisionError` |

## 面试表达

今天这个主题可以这样讲：

> 我会用 Python 的函数、主入口和异常处理组织基础工程代码。对于可能出错的逻辑，我会通过 `try/except` 进行可控处理，并使用 `logging` 记录运行结果和错误信息，而不是只依赖临时 `print`。这种写法在后续训练脚本、数据处理脚本和服务接口中都很重要。

## 明日准备

- 进入 Day-004，开始学习 `NumPy` 的数组和矩阵计算。
- 重点建立 `shape`、逐元素运算和广播机制的理解，为后续 `PyTorch` 做准备。
