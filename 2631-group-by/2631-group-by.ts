declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
  const result = {}
  
  this.forEach(value => {
    const key = fn(value)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(value)
  })
  
  return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */