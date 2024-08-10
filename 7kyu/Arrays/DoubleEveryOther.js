function doubleEveryOther(arr) {
    return arr.map((num, index) => {
            if (index % 2 !== 0) {
                return num * 2;
            }
            return num;
        });
    }