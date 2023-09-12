export const babySteps = () => {
   
    let result1 = 0;
    for (let index = 2; index < process.argv.length; index++) {
        const element = Number(process.argv[index]);
        result1 += element;
    };
    
    console.log(result1); 
    return result1
}

babySteps()