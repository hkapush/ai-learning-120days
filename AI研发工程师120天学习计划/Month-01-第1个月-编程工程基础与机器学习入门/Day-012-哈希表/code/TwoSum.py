
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
