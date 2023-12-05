interface cacheMap {
  value: number,
  timer: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
  
    cache = new Map<number, cacheMap>()

    constructor() {
    }
    
    set(key: number, value: number, duration: number): boolean {
      const exist = this.cache.has(key)
      if (exist) {
        clearTimeout(this.cache.get(key).timer)
      }
      
      this.cache.set(key, {
        value,
        timer: setTimeout(() => {this.cache.delete(key)}, duration)
      })
      return exist
    }

    get(key: number): number {
      return this.cache.get(key) ? this.cache.get(key).value : -1
    }

    count(): number {
        return this.cache.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */