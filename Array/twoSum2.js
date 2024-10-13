/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let left = 0; 
    let right = numbers.length - 1
    
    while (left < right) {
        const sum = numbers[left] + numbers[right]
        
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); // Output: [4, 5]
