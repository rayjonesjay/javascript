function debounce(func, wait) {
    let timeout;  // Store the timer

    return function(...args) {
        clearTimeout(timeout);  // Cancel any previously set timer

        timeout = setTimeout(() => {
            func.apply(this, args);  // Execute the function after `wait` milliseconds
        }, wait);
    };
}
function opDebounce(func, wait, options = {}) {
    let timeout;
    let lastCall = 0;
    let leadingCall = false;

    const leading = options.leading || false;

    return function(...args) {
        const context = this;
        const now = Date.now();

        // Check if the function should be invoked on the leading edge
        const shouldInvokeImmediately = leading && !leadingCall;

        if (shouldInvokeImmediately) {
            // If leading is true and this is the first call, execute immediately
            func.apply(context, args);
            leadingCall = true;
            lastCall = now;
        } else {
            // If leading is false or it's a subsequent call, debounce
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                // Reset leadingCall so that subsequent calls can invoke immediately
                leadingCall = false;
                func.apply(context, args);
            }, wait);
        }

        lastCall = now;
    };
}

const wait  = 4000 // 3 seconds
function helloworld(){
    console.log("i am the potato")
}

debounce(helloworld,wait)
// const ld = require('lodash')
//
// let debfunc = ld.debounce(function () {
//     console.log("hello world");
// },1000, {leading: true, trailing: true});
//
// debfunc()
