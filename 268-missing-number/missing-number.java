class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int sum = (n*(n+1))/2;
        int result = 0;

        for (int num:nums){
            result = result+num;
        }
        return sum-result;
    }
}