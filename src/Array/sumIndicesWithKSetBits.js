function sumIndicesWithKSetBits(nums, k) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Count the set bits (1s) in the binary representation of the index
        const setBits = i.toString(2).split('1').length - 1;

        // Add the current number if the count of set bits equals k
        if (setBits === k) {
            sum += nums[i];
        }
    }

    return sum;
}

// Example usage
const nums = [5, 10, 1, 5, 2];
const k = 1;
console.log(sumIndicesWithKSetBits(nums, k)); // Output: 13
