/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var addedInteger = function (nums1, nums2) {
    // Sort both arrays to compare differences
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    // Calculate x from the difference of the first elements
    let x = nums2[0] - nums1[0];
  
    // Validate x for the rest of the array
    for (let i = 1; i < nums1.length; i++) {
      if (nums2[i] - nums1[i] !== x) {
        return null; // Return null if x is inconsistent
      }
    }
  
    return x;
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [4, 5, 6];
  console.log(addedInteger(nums1, nums2)); // Output: 3
  