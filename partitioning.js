/// To do complex calculations without blocking the event loop
// Reduce the cost of operations from  O(n) to O(1)

/**
 * Event loop Calls
 * - Timers... Callbacks set by setTimeout and setInterval
 * - Pending Callbacks... Callbacks that were defered to the next round
 * - Idle, prepare... For internal use
 * - poll phase - incoming, new connections, IO events and related callbacks
 * - check phase - setImmediate() callbacks are called here
 * - close callbacks
 */

const asyncSum = (n, displaySum) => {
    /* The function with heavy operation -  Calculate the sum of a large array */
    let  sum = 0;
    const help = (i, cb)=>{ // Use closure to access the sum and handle it
        sum += i;
        if (i == n) {
            displaySum(sum); // run the console log and get out defined last below
            return;
        }
    // Schedule the next operation asynchronously with the next value in the next loop
    setImmediate(help(i+1, cb));
    };

// Run the first loop with 1, the rest will be run by the 
    help(1, (sum)=>{
        let avg = sum/n;
        avgCB(avg)
});
}
asyncSum(n, (sum)=>{
    console.log('sum of array from 1-n: ' + sum)
});