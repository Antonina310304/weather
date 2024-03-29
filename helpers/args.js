const getArgs = (args) => {
    const res = {};

    args.slice(2).forEach((value, idx, array) => {
       if(value[0] !== "-") {
           return;
       }
       const index = value.slice(1);

       const nextValue = array[idx + 1]?.[0];
        if(nextValue && nextValue !== "-") {
           res[index] = array[idx + 1]
       } else {
           res[index] = true
       }
    });

    return res;
}

export {getArgs}