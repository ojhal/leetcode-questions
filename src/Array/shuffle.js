/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);    // Add the x values
        result.push(nums[i + n]); // Add the y values
    }
    return result;
}

// Example usage:
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(nums, n));