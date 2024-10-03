(() => {
    const calcTotal = (prices: number[]): string => {
       let total = 0;
       prices.forEach((item) => {
        total+= item;
       });
       return total.toString();
    }

    const rta = calcTotal([1,2,3,1,5,1,3]);
    console.log(rta);

    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`Total: ${rta}`);
    };

    printTotal([1,4,51,2,3,1]);
})();