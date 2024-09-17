const throttle = (func, wait) => {
    let last = 0;
    return function(...args){
        const now = +new Date();
        if (now - last > wait) {
            func.apply(this, args);
            last = now;
        }
    }
}

const opThrottle = (func, wait, { leading = false, trailing = true } = {}) => {
    let last = 0
    let timer = null

    return function(...args) {
        const now = Date.now();

        if (!last && !leading) {
            last = now
        }

        if (now - last > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            func.apply(this, args);
            last = now
        }else if (!timer && trailing) {
            timer = setTimeout(() => {
                func.apply(this, args);
                last = +new Date();
                timer = null
            }, wait);
        }
    }
}