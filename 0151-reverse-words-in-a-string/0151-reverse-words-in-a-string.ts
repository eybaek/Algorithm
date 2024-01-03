function reverseWords(s: string): string {
    let split = s.trim().split(' ')
    const answer = []
    for (let i=split.length-1; i >= 0; i--) {
        if (!!split[i].length) {
            answer.push(split[i])
        }
    }
    console.log(answer)
    return answer.join(' ')
};