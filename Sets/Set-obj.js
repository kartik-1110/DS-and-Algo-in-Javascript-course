function mySet() {
  let items = {};

  this.has = function (value) {
    return items[value];
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.values = function () {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.union = function (otherSet) {
    let unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function (otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
}

let setA = new mySet();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new mySet();
setB.add(3);
setB.add(4);
setB.add(5);

let unionAB = setA.union(setB);
console.log(unionAB.values());
