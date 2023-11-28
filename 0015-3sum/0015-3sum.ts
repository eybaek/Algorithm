function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];

  for(let i = 0; i < nums.length - 2; i++) {
      if(i > 0 && nums[i] == nums[i - 1]) continue; // 중복값 스킵

      let left = i + 1;
      let right = nums.length - 1;

      while(left < right) {
          let sum = nums[i] + nums[left] + nums[right];

          if(sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              while(nums[left] == nums[left + 1]) left++; // 중복값 스킵
              while(nums[right] == nums[right - 1]) right--; // 중복값 스킵

              left++;
              right--;
          } else if(sum > 0) {
              right--;
          } else if(sum < 0) {
              left++;
          }
      }
  }
  return result;
};