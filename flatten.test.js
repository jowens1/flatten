const flatFunc = require('./flatten');
const arrayToFlatten = [ 1, [2,3]];

test('Takes array and flattens', () => {
    expect(flatFunc(arrayToFlatten)).toEqual([1,2,3])
})