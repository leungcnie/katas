// Return number with the earliest indexed duplicate

// First try
function firstDuplicate(a) {
  const dict = {};
  let smallest = [null, a.length]; // number, 2nd index
  
  for (i = 0; i < a.length; i++) {
      if (dict[a[i]]) {
          dict[a[i]].push(i);
      } else {
          dict[a[i]] = [i];
      }
  }
  
  for (const key in dict) {
      if (dict[key].length >= 2) {
          if (dict[key][1] < smallest[1]) { // if 2nd occurrence < local min
              smallest = [Number(key), dict[key][1]] 
          }
      }
  }
  
  return Object.values(dict).filter(a => a.length >= 2).length === 0? -1 : smallest[0];
}

// Second try => exceeded runtime constraint
function firstDuplicate(a) {
  const uniqueNums = [];
  
  for (const num of a) {
      if (uniqueNums.includes(num)) {
          return num;
      }
      uniqueNums.push(num);
  }
  
  return -1;
}

// Top voted solution
firstDuplicate = a => {
  r = new Set()
  for (e of a)
      if (r.has(e))
          return e
      else
          r.add(e)
  return -1
}