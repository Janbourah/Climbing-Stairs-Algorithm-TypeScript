function climbStairs(n: number): number {
  // 1 stair = 1 way, 2 stairs = 2 ways
  if (n <= 2) {
    return n;
  }

  // We only need to track the results of the two previous stairs
  let twoStepsBefore = 1; // Represents f(n-2)
  let oneStepBefore = 2; // Represents f(n-1)
  let currentWays = 0; // Represents f(n)

  // Start calculating from stair 3 up to n
  for (let i = 3; i <= n; i++) {
    // The current step is the sum of the two preceding steps
    currentWays = oneStepBefore + twoStepsBefore;

    // Shift our "window" of memory forward by one stair
    twoStepsBefore = oneStepBefore;
    oneStepBefore = currentWays;
  }

  return currentWays;
}

// Example
const stairs = 5;
const waysToClimb = climbStairs(stairs);
console.log(`There are ${waysToClimb} ways to climb ${stairs} stairs.`);
// Expected Output: There are 8 ways to climb 5 stairs.
