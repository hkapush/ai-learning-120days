def find(nums,target):
    left = 0
    right = len(nums) - 1
    while left < right:
        current_sum =  nums[left]+nums[right]
        if(current_sum ==target):
            return [left,right]
        elif current_sum < target:
            left +=1
        else:
            right -=1

    return []

nums = [1, 2, 4, 6, 10]
target = 8
print(find(nums, target))

def find_2(nums):
    left = 0
    right = 0
    inset =set()
    max_length =0
    while right< len(nums)-1:
        if(nums[right] in inset):
            inset.remove(nums[left])
            left +=1
        else:
            inset.add(nums[right])
            right +=1

        max_length = max(max_length,len(inset))

    return max_length

    
s = "abcabcbb"
print(find_2(s))