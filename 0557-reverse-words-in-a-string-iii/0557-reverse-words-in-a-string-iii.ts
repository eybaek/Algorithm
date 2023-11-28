function reverseWords(s: string): string {
  const words = s.split(' ')
  for(let i=0; i<words.length; i++) {
    words[i] = words[i].split('').reverse().join('')
  }
  return words.join(' ')
}