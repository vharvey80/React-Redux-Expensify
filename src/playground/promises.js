const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: "Vincent",
        //     age: 23
        // });
        reject("Something went wrong!")
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});