const outputDiv = document.getElementById('output');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomNumber(1, 10);
        const shouldReject = Math.random() < 0.5;

        setTimeout(() => {
            if (shouldReject) {
                reject(new Error('Promise rejected with error'));
            } else {
                resolve(randomNumber);
            }
        }, 1000); // Simulating asynchronous operation with setTimeout
    });
}

const promises = Array.from({ length: 5 }, createPromise);

Promise.all(promises)
    .then((results) => {
        results.forEach((result, index) => {
            outputDiv.innerHTML += `<p>Promise ${index + 1} resolved with ${result}</p>`;
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
