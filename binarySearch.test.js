import binarySearchWithLoops from './binarySearch.js';
import { deepStrictEqual } from 'assert';

deepStrictEqual(binarySearchWithLoops([], 2), -1);
deepStrictEqual(binarySearchWithLoops([1], 1), 0);
deepStrictEqual(binarySearchWithLoops([1], 2), -1);
deepStrictEqual(binarySearchWithLoops([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithLoops([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithLoops([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithLoops([1,2,3,7], 3), 2);