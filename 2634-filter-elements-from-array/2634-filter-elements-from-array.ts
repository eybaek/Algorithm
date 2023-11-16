type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
	let answer = []
  for (let i=0; i<arr.length; i++) {
    if (fn(arr[i], i)) {
      answer.push(arr[i])      
    }
  }
  return answer
};