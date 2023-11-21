/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (nums2.length === 0) {
      return
    }
    
    // nums2를 nums1 로 옮기되, m인덱스 부터 원소를 삭제
    for (let i=0; i<n; i++) {
      nums1.splice(m+i, 1, nums2[i])
    }

    nums1.sort((a, b) => a-b)
};