function canConstruct(ransomNote: string, magazine: string): boolean {
    let map = new Map<string, number>()
    ransomNote.split('').filter((str) => {
        let count = 0
        if (map.has(str)) {
            count = map.get(str)
        }
        
        map.set(str, ++count)
    })
    
    magazine.split('').filter((str) => {
        if (map.has(str)) {
            let count = 0
            count = map.get(str)
            map.set(str, --count)
        }
        
        if (map.get(str) === 0) {
            map.delete(str)
        }
    })

    return map.size == 0 ? true : false
};