type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise<T[]>( (resolve, reject) => {
    if (functions.length === 0){
      resolve([]);
    }
    
    const results: T[] = [];
    let completed =0;
    
    functions.forEach( (fn, index) => {
      fn()
        .then( (result) => {
          results[index] = result;
          completed++;
        
          if(completed === functions.length) {
            resolve(results);
          }
        })
        .catch(reject)
    })
  })
	
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */