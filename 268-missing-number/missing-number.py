class Solution:
    def missingNumber(self, nums):
        n = len(nums)
        suma_totala = n * (n + 1) // 2
        suma_lista = sum(nums)
        x = suma_totala - suma_lista
        return x


