// runtime complexity is O(n) with n being the number of integers in the queue
const minimumBribes = (q) => {

    // we want to return this count variable 
    let count = 0;
    // we want to keep track of the q.length number which should be the highest number in the queue
    let min = q.length;

    // loop through backwards because the queue was originally in sorted order
    // and we want to compare all the numbers not greater than their index with the
    // min number and count up
    // if the number is greater than the one at the current index, then we get the difference
    // assuming that it is no more than 2 and add it to the count tracker.
    for(let i=q.length-1; i>=0; i--) {
        if ((q[i] - (i+1)) > 2) {
            return 'Too chaotic';
        }
        if (q[i] > i+1) {
            count += (q[i] - (i+1));
        } else {
            if (min > q[i]) {
                min = q[i];
            } else if (min !== q[i]) {
                count++
            }
        }
    }
    return count;
}

// optimized solution using bubble sort
const minimumBribesOptimized = (q) => {
    for (let i=0; i<q.length-1; i++) {
        if ((q[i] - (i+1)) > 2) {
            return 'Too chaotic';
        }
    }

    let count = 0;
    let i=0;
    while(i < q.length - 1) {
        // if integer at current index is greater than index plus one
        // then do bubble sort switch and scale back i by 1  (difference between i-=2 and i++), so that
        // it looks at the previous integer after the switch to see if that needs to be switched also
        if (q[i] > q[i+1]) {
            let temp = q[i];
            q[i] = q[i+1];
            q[i+1] = temp;

            count++;
            i -= 2;
        }
        i++;
    }
    return count;
}

let q = [2,1,5,3,4]; // 3
console.log(minimumBribes(q))