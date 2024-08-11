function likeOrDislike(buttons) {
    let state = "Nothing";

    for (let button of buttons) {
        if (button === state) {
            state = "Nothing";
        } else {
            state = button;
        }
    }

    return state;
}