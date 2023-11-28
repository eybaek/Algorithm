function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g,'')
  s = s.toLowerCase()

  console.log(s)
  
  const len = s.length
  const middle = Math.floor(len/2)
  
  for(let i=0; i<middle; i++) {
    if (s.charAt(i) !== s.charAt(len-1-i)) {
      return false
    }
  }
  return true
};