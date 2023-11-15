type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
	const throwError = (error) => {throw new Error(error)}

  return {
    toBe: (target) => val === target || throwError('Not Equal'),
    notToBe: (target) => val !== target || throwError('Equal')
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */