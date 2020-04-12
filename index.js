// Your code here
function mapToNegativize(array){
  let newArray = []
  for(let num of array){
    newArray.push(num*-1)
  }
  return newArray
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  let newArray = []
  for(const num of array){
    newArray.push(num*2)
  }
  return newArray
}

function mapToSquare(array){
  let newArray = []
  for(const num of array){
    newArray.push(num ** 2)
  }
  return newArray
}

//reduce Methods
function reduceToTotal(array, startingpoint = 0){
  let total = 0
  for(const num of array){
    total += num
  }
  return total
}