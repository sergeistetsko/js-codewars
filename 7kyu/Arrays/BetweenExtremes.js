function betweenExtremes(arr) {
    let max = Math.max(...arr);
        let min = Math.min(...arr);
    
        return max - min;
    }