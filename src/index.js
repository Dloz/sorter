class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.array[this.array.length] = element;
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
        var newArr = [];
        var arr = this.array;
        indices.forEach(function(elem){
          newArr.push(arr[elem]);
          arr[elem] = null;
        });
        
        newArr.sort(this.compareFunction);
        
        arr.forEach(function(elem, i, arr){
        if(elem === null){
          arr[i] = newArr.shift()
        }
        });
    this.array = arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;