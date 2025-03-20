var findMedianSortedArrays = function(nums1, nums2) {
  debugger;
  const result = [];

  const halfLength = Math.ceil((nums1.length + nums2.length) / 2);
  const isEven = (nums1.length + nums2.length) % 2 === 0;

  let pointer1 = 0;
  let pointer2 = 0;

  const lastIndex = isEven ? halfLength + 1 : halfLength;

  while(result.length < lastIndex) {
    if (nums1[pointer1] > nums2[pointer2] || pointer1 >= nums1.length) {
      result.push(nums2[pointer2])
      pointer2++;
    } else {
      result.push(nums1[pointer1])
      pointer1++;
    }
  }

  const median = isEven ? (result[halfLength - 1] + result[halfLength]) / 2 : result[halfLength - 1]

  return median;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));