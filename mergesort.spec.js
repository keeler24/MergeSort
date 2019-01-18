describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([1,2], [3,4,5])).toEqual([1,2,3,4,5]);
        expect(merge([2,3], [1,4,5])).toEqual([1,2,3,4,5]);
        expect(merge([5,6,7],[8,9,10,11,12])).toEqual([5,6,7,8,9,10,11,12])
    });
  });

  describe('merges sorted functions', function() {
    it('is able call both split and merge function', function() {
      expect(mergeSort([5,3,7,9,1,2,6,4,8])).toEqual([1,2,3,4,5,6,7,8,9]);
      expect(mergeSort([1000,100,4,2,200,576])).toEqual([2,4,100,200,576,1000]);

    });
  });