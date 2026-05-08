# Day 12 学习记录：哈希表

## 今日完成

- 完成了 `Two Sum` 的哈希表解法。
- 完成了字符串字符计数练习。
- 建立了哈希表两类最常见用途：映射、计数。

## 核心笔记

- 当题目核心是“快速判断是否存在”“快速计数”“值到位置的映射”时，优先考虑哈希表。
- 哈希表的核心价值是用空间换时间，把很多重复查找优化成平均 `O(1)` 查询。
- 哈希表最常见的两个用途：
  - 映射：值 -> 下标 / 值 -> 其他信息
  - 计数：字符/数字 -> 出现次数
- `Two Sum` 中用哈希表记录“数字 -> 下标”，就能把暴力双循环 `O(n^2)` 优化成一遍遍历 `O(n)`。
- 字符计数问题中，`dict` 比 `list` 更合适，因为它天然适合键值映射和频次统计。

## 代码/实验结果

- `Two Sum` 代码：

```python
def find(nums,target):
    num_to_index = {}

    for i,num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement] , i]
        num_to_index[num] = i
    
    return []

nums = [2, 7, 11, 15]
target = 9

print(find(nums, target))
```

- 输出结果：

```text
[0, 1]
```

- 字符计数代码：

```python
def char_count(s):
    count = {}
    for ch in s:
        if ch in count:
            count[ch] +=1
        else:
            count[ch] =1
    
    return count

s = "aabbbc"
print(char_count(s))
```

- 预期输出：

```text
{'a': 2, 'b': 3, 'c': 1}
```

- 结果说明：
  已掌握哈希表在查询和计数两类问题中的基本用法。

## 遇到的问题

| 问题 | 原因 | 解决方式 |
| --- | --- | --- |
| 回答哈希表用途时把“计数”说成了“技术” | 口头表述笔误 | 固定记忆为：映射、计数 |
| 字符计数代码贴出时少了清晰的输出展示 | 聊天时把字符串和结果混在一起了 | 补成完整可运行版本，并显式 `print(char_count(s))` |

## 面试表达

今天这个主题可以这样讲：

> 哈希表最常见的两个用途是映射和计数，核心价值是把很多原本需要重复查找的问题，优化成接近 `O(1)` 的平均查询。我已经能够用 `dict` 完成下标映射类问题和字符频次统计类问题。

## 明日准备

- 进入 Day-013，学习栈与队列。
- 从哈希表的“快速查找”切换到“按顺序处理状态”的思维方式。
