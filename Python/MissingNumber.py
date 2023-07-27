class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # Solution 1:

        for i in range(len(nums)):
            val = i+1
            if val not in nums:
                return val
        
        return 0
    
    def missingNumberEfficient(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # Solution 2(most efficient):

        return sum(range(1, len(nums)+1))-sum(nums)