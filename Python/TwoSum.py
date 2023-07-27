class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        remainder = {}
        for i in range(len((nums))):
            num = nums[i]
            result = target-num
            if num in remainder:
                return [remainder[num], i]
            else:
                remainder[result]=i
                
