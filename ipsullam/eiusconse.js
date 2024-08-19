const scale = 1.5; // Example value, could be undefined or any other value

const options = {
    width: 100,
    height: 200,
    ...(scale !== undefined ? { scale } : {}),
    color: 'red'
};

console.log(options);
