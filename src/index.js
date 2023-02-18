module.exports = function check(str, bracketsConfig) {
  let stack = []
	let openBrackets = []
	let braсketsMap = {}
  bracketsConfig.forEach( value => {
  	openBrackets.push(value[0]);
  	braсketsMap[value[1]] = value[0];
  })
 	for ( let i = 0; i < str.length; i++){
  	let currentBracket = str[i];
     if (currentBracket === stack[stack.length - 1] && braсketsMap[currentBracket] === currentBracket ){
      stack.pop()
   }
    else if(openBrackets.includes(currentBracket)){
    	stack.push(currentBracket)
    } else {
    	if (stack.length === 0) {
      	return false
      }
      let stackTop = stack[stack.length - 1]
      if (braсketsMap[currentBracket] === stackTop ){
      	stack.pop()
      } else {
      	return false;
      }
    }
  }
  return stack.length === 0;
}
