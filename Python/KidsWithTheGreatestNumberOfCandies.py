class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        maxNum = max(candies)
        output = []
        for candy in candies:
            output.append(candy+extraCandies >= maxNum)
        return output