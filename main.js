const biggify = function(num){
  return num + 9000
  }
  
  const nasafy = function(arr){
    let newArr = []
    let num = Number(arr.toString())
    for (let i = num; i >= 1; i--)
    {newArr.push(i)}
    newArr.push('Blast off!')
    return newArr
  }
  
  const reversify = function(str){
    return str.split('').reverse().join('')
  }
  
  const titleify = function(str){
    let newStr = ''
    for(let i = 0; i < str.length; i ++)
    return newStr += str[i].toUpperCase()
  }
  
  const crazify = function(str){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newStr = ''
  }
  





if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
