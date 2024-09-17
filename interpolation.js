const interpolation = ( { step = 0, start = 0, end = 0, callback = () => {}, duration = 0,} = {}) => {
    const incrementor = (end - start) / step;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
        if (i < step) {
            callback([current, (duration / step) * (i + 1)]);
            current += incrementor
            i++
        } else {
            clearInterval(timer)
        }
    }, duration / step);
}