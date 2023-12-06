type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  let i=0;
  const answer = [];
  
  

  while(i < arr.length) {
    answer.push(arr.slice(i, i+size));
    i = i + size
  }
  
  return answer
	
};
