import { groupBy, isEmpty, sort, sortBy } from './array';

describe('GIVEN isEmpty', () => {
  it('WHEN is null THEN should return true', () => {
    expect(isEmpty(null as any)).toBeTruthy();
  });
  it('WHEN is undefined THEN should return true', () => {
    expect(isEmpty(undefined as any)).toBeTruthy();
  });
  it('WHEN array is empty THEN should return true', () => {
    expect(isEmpty([])).toBeTruthy();
  });
  it('WHEN array contains items THEN should return false', () => {
    expect(isEmpty(['test'])).toBeFalsy();
  });
});

describe('GIVEN groupBy', () => {
  it('WHEN grouped by property code THEN should return an object withed grouped arrays based on code', () => {
    const arr = [
      { code: 'group-1', name: 'i am in group 1' },
      { code: 'group-1', name: 'i should also be in group 1' },
      { code: 'group-2', name: 'i am in group 2' },
      { code: 'group-2', name: 'i should also be in group 2' },
    ];
    const expectedResult = {
      ['group-1']: [
        { code: 'group-1', name: 'i am in group 1' },
        { code: 'group-1', name: 'i should also be in group 1' },
      ],
      ['group-2']: [
        { code: 'group-2', name: 'i am in group 2' },
        { code: 'group-2', name: 'i should also be in group 2' },
      ],
    };
    expect(groupBy(arr, 'code')).toEqual(expectedResult);
  });
  it('WHEN array is empty THEN should return an empty object', () => {
    expect(groupBy([], 'test')).toEqual({});
  });
  it('WHEN array is null THEN should return an empty object', () => {
    expect(groupBy(null as any, 'test')).toEqual({});
  });
  it('WHEN array is undefined THEN should return an empty object', () => {
    expect(groupBy(undefined as any, 'test')).toEqual({});
  });
});

describe('GIVEN sort', () => {
  it('WHEN array has items of strings THEN should return array in correct order', () => {
    const array = ['pear', 'oranges', 'apples', 'bananas'];
    const expectedResult = ['apples', 'bananas', 'oranges', 'pear'];
    expect(sort(array)).toEqual(expectedResult);
  });
  it('WHEN array has items of numbers THEN should return the array in correct order', () => {
    const array = [100, 44, 150, 3];
    const expectedResult = [3, 44, 100, 150];
    expect(sort(array)).toEqual(expectedResult);
  });
  it('WHEN arrau is empty THEN should return en empty array', () => {
    const array: unknown[] = [];
    expect(sort(array)).toEqual([]);
  });
  it('WHEN array is null THEN should return an empty array', () => {
    expect(sort(null as any)).toEqual([]);
  });

  it('WHEN array is undefined THEN should return an empty array', () => {
    expect(sort(undefined as any)).toEqual([]);
  });
});

describe('GIVEN sortBy', () => {
  it('WHEN recieves an array and sort property is name THEN should return an array sorted by name', () => {
    const array = [{ name: 'oranges' }, { name: 'pear' }, { name: 'bananas' }, { name: 'apples' }];
    const expectedResult = [{ name: 'apples' }, { name: 'bananas' }, { name: 'oranges' }, { name: 'pear' }];
    expect(sortBy(array, 'name')).toEqual(expectedResult);
  });
  it('WHEN recieves an empty array THEN should return an empty', () => {
    const array: { name: string }[] = [];
    expect(sortBy(array, 'name')).toEqual([]);
  });

  it('WHEN receives an array with sortBy placementInList and thenBy name THEN should first sort by placementInList and then by name', () => {
    const array = [
      { name: 'oranges', placementInList: 0 },
      { name: 'pear', placementInList: 1 },
      { name: 'bananas', placementInList: 1 },
      { name: 'apples', placementInList: 0 },
    ];
    const expectedResult = [
      { name: 'apples', placementInList: 0 },
      { name: 'oranges', placementInList: 0 },
      { name: 'bananas', placementInList: 1 },
      { name: 'pear', placementInList: 1 },
    ];

    const result = sortBy(array, 'placementInList', 'name');
    expect(result).toStrictEqual(expectedResult);
  });

  it('Should sort an array with object on property', () => {
    const array = [{ name: 'oranges' }, { name: 'pear' }, { name: 'bananas' }, { name: 'apples' }];
    const expectedResult = [{ name: 'apples' }, { name: 'bananas' }, { name: 'oranges' }, { name: 'pear' }];
    expect(sortBy(array, 'name')).toEqual(expectedResult);
  });
});
