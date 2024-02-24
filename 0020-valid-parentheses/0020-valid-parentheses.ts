function isValid(s: string): boolean {
    let stack = [];
    
    for (const pick of s) {
        if (pick === '(' || pick === '{' || pick === '[' ) {
            stack.push(pick);
        } else {
            const popped = stack.pop()
            if (pick == ')' && popped == '(') {
                
            } else if (pick == '}' && popped == '{') {
                
            } else if (pick == ']' && popped == '[') {
                
            }  else {
                return false
            }
        }
    }
    return stack.length === 0    
};