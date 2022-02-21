function mySet() {
  let items = [];

  this.has = function (value) {
    return items.indexOf(value) !== 1;
  };

  this.values = function () {
    return items;
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items.push(value);
      return true;
    }
    return false;
  };

  this.delete = function (value) {
    if (this.has(value)) {
      index = items.indexOf(value);
      items.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return items.length;
  };

  this.union = function (otherSet) {
    let unionSet = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
}

let setA = new mySet();
setA.add(2);
setA.add(7);
setA.add(6);
let setB = new mySet();
setB.add(3);
setB.add(4);
setB.add(5);

let unionAB = setA.union(setB);
console.log(unionAB.values());
