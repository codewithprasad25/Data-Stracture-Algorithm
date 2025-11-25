class Solution {
public:

    void solve(vector<int>&nums, vector<vector<int>>&v, int i, vector<int> temp){
        if(i >= nums.size()) {
            v.push_back(temp);
            return;
        }

        solve(nums,v,i+1, temp);
        temp.push_back(nums[i]);
        solve(nums, v, i+1, temp);
    
    }

    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> v;
        vector<int> temp;
        solve(nums, v, 0, temp);

        return v;
    }
};