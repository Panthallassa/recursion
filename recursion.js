/** product: calculate the product of an array of numbers. */

function product(nums) {
	if (nums.length === 0) {
		return 1;
	}

	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	if (words.length === 0) {
		return 0;
	}

	let firstWordLength = words[0].length;

	let longestInRest = longest(words.slice(1));

	return Math.max(firstWordLength, longestInRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	if (str.length === 0) {
		return "";
	}

	return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	if (str.length <= 1) {
		return true;
	}

	if (str[0] !== str[str.length - 1]) {
		return false;
	}

	return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
	if (index >= arr.length) {
		return -1;
	}

	if (arr[index] === val) {
		return index;
	}

	return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	if (str.length === 0) {
		return "";
	}

	return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	res = [];

	function collectStrings(currentObj) {
		for (let key in currentObj) {
			if (typeof currentObj[key] === "string") {
				res.push(currentObj[key]);
			} else if (
				typeof currentObj[key] === "object" &&
				currentObj[key] !== null
			) {
				collectStrings(currentObj[key]);
			}
		}
	}

	collectStrings(obj);

	return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(
	arr,
	val,
	left = 0,
	right = arr.length - 1
) {
	if (left > right || arr.length == 0) {
		return -1;
	}

	const mid = Math.floor((left + right) / 2);

	if (arr[mid] === val) {
		return mid;
	}

	if (val < arr[mid]) {
		return binarySearch(arr, val, left, mid - 1);
	}

	return binarySearch(arr, val, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
