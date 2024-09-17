const retry = (count = 3, callback = async () => {}) => {
    return async function(...args) {
        console.log(`Retry count: ${count}`);
        try {
            const res = await callback(...args);
            return res;
        } catch (e) {
            console.error(`Error encountered: ${e.message}`);
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
};

const timeout = (delay = 0, callback = async () => {}) => {
    return async function (...args) {
        console.log(`Starting timeout with delay: ${delay}ms`);
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => {
                console.error(`Timeout occurred after ${delay}ms`);
                reject(new Error('timeout'));
            }, delay)
        );

        const functionPromise = Promise.resolve(callback(...args));

        try {
            const result = await Promise.race([timeoutPromise, functionPromise]);
            console.log("Function completed successfully before timeout.");
            return result;
        } catch (error) {
            console.error(`Error in timeout: ${error.message}`);
            throw error;
        }
    };
};