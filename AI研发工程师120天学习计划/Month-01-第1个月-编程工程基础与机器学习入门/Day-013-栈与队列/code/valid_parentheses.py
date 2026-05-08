def is_valid(s):
    stack = []
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for ch in s :
        if ch in pairs:
            if not stack or stack[-1] !=pairs[ch]:
                return False
            stack.pop()
        else:
            stack.append(ch)

    return len(stack) == 0

print(is_valid("()[]{}"))
print(is_valid("(]"))
print(is_valid("([{}])"))

def next_greater(nums):
    result = [-1] * len(nums)
    stack = []
    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            index = stack.pop()
            result[index] = nums[i]
        
        stack.append(i)

    return result

nums = [2, 1, 2, 4, 3]
print(next_greater(nums))