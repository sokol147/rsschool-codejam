const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () =>{
  it('1', () =>{
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });

  it('2', () =>{
    const solutions = sumOfOther([2, 3, 4, 1, 2]);
    assert.deepEqual(solutions, [10, 9, 8, 11, 10]);
  });

  it('3', () =>{
    const solutions = sumOfOther([2, 3, 4, 1, 2, 67, 90, 34]);
    assert.deepEqual(solutions, [201, 200, 199, 202, 201, 136, 113, 169]);
  });

  it('4', () =>{
    const solutions = sumOfOther([2, 3, 4, 1, 2, 67, 90, 34, 90304, 23445, 435445]);
    assert.deepEqual(solutions, [549395, 549394, 549393, 549396, 549395, 549330, 549307, 549363, 459093, 525952, 113952]);
  });

  it('5', () =>{
    const solutions = sumOfOther([2, 3]);
    assert.deepEqual(solutions, [3, 2]);
  });
});