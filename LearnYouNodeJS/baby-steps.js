let result = 0;
for (let index = 2; index < process.argv.length; index++) {
    const element = Number(process.argv[index]);
    result += element;
};

console.log(result);