const _ = {
  //applying clamp
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  //applying inRange
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      var startRecord = start;
      start = end;
      end = startRecord;
    }

    const isInRage = number >= start && number < end ? true : false;
    return isInRage;
  },

  //only separating words based on space
  words(string) {
    const array = string.split(" ");
    return array;
  },

  //only add space character to pad string
  pad(string, length) {
    if (length > string.length) {
      var paddingStart = Math.floor((length - string.length) / 2);
      var paddingEnd = length - string.length - paddingStart;
      var paddedString = " ";
      return `${paddedString.repeat(
        paddingStart
      )}${string}${paddedString.repeat(paddingEnd)}`;
    } else {
      return string;
    }
  },

  //check unested values only
  has(object, key) {
    var hasValue = object[key] !== undefined;
    return hasValue;
  },

  //apply invert
  invert(object) {
    var invertedObject = {};
    for (const property in object) {
      var originalValue = object[property];
      invertedObject[originalValue] = property;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (const property in object) {
      var value = object[property];
      var predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return property;
      }
    }
    return undefined;
  },

  drop(array, number) {
    var newArray = array;
    if (number === undefined) {
      return newArray.slice(1);
    } else {
      return newArray.slice(number);
    }
  },

  dropWhile(array, predicate) {
      var dropNumber = array.findIndex(function(element, index){
          return !predicate(element,index, array)
      });
      var droppedArray = this.drop(array,dropNumber);
      return droppedArray;
  },

  chunk(array,size){
      var newArray = [];
      //check if size has been set
      if (size === undefined) {
          return array;
      } else {
          for (let i = 0; i < array.length; i += size){
              //create the array chunks
              arrayChunk = array.slice(i, i+size);
              newArray.push(arrayChunk);
          }
          return newArray
      }
  }


};

 




// Do not write or modify code below this line.
module.exports = _;