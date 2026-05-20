# Climbing-Stairs-Algorithm-TypeScript
This is the classic Climbing Stairs problem. It is a fantastic introduction to Dynamic Programming because it perfectly illustrates how a complex problem can be broken down into smaller, overlapping subproblems.

# Problem Analysis
If you want to reach the $n$-th stair, there are only two possible ways to get there for your final move:
1. You take a 1-step from the $(n-1)$-th stair.
2. You take a 2-step from the $(n-2)$-th stair.
Therefore, the total number of ways to reach stair $n$ is simply the sum of the ways to reach stair $n-1$ and the ways to reach stair $n-2$.
Mathematically, this is expressed as the recurrence relation:
$f(n) = f(n-1) + f(n-2)$
If this looks familiar, it's because it is the Fibonacci sequence.
- Base Case 1: For $n = 1$, there is only $1$ way (one 1-step).
- Base Case 2: For $n = 2$, there are $2$ ways (two 1-steps, or one 2-step).
While you could solve this using recursion, it would be extremely slow ($O(2^n)$ time complexity) because it recalculates the same steps repeatedly.The most efficient approach uses a bottom-up Dynamic Programming technique to achieve $O(n)$ time and $O(1)$ space by only remembering the last two calculated steps.

# Code Explanation
- Memory Optimization: Instead of using an array to store the answer for every single stair up to $n$ (which would take $O(n)$ space), we use two variables: oneStepBefore and twoStepsBefore.
- The Loop: The loop starts at step 3. It adds the two previous values to find the currentWays.
- Shifting the Window: Before the next iteration, it updates twoStepsBefore to become oneStepBefore, and oneStepBefore to become the newly calculated currentWays. This effectively "walks" up the stairs until it reaches $n$.