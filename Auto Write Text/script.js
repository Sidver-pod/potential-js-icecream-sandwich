const text = 'My viewers on Twitch are the best!! 🤍';

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if(index > text.length) {
        clearInterval(id); //stops typing to allow user to read
        setTimeout(() => {
            index = 0; //resets after 1.2sec.
            id = setInterval(writeText, 120);
        }, 1000);
    }
}

let id = setInterval(writeText, 120);
