// Your code here
function mapToNegativize(array){
  let newArray = []
  for(let num of array){
    newArray.push(num*-1)
  }
  return newArray
}

function mapNoChange(array){
  return array
}