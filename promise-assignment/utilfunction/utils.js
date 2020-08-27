function contains(mainString, subString) {
  let index = mainString.toLowerCase().indexOf(subString.toLowerCase());
  console.log(index);
  return index >= 0;
}

function searchAll(list, isMatch) {
  console.log("searchall called");
  let promise = new Promise(function (resolve, reject) {
    let result = [];
    for (let value of list)
      if (isMatch(value)) {
        result.push(value);
        return reslove(result);
      } else return reject(null);
  });
  return promise;
}

function searchSingle(list, isMatch) {
  for (let value of list) if (isMatch(value)) return value;

  return null;
}
