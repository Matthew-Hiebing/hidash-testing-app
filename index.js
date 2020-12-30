module.exports = {
    forEach(arr, fn) {
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     fn(value);
        // }

        for (let index in arr) {
            fn(arr[index], index);
        }
    }
}
