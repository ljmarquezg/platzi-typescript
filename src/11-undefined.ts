(() => {
    let myNull: null = null
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 10;

    let myString: string | undefined = undefined;
    myString = 'hola';

    function hi(name: string | undefined) {
        let hello = 'Hello';
        if(name) {
            hello += ' ' + name;
        } else {
            hello += ' friend';
        }
        console.log(hello);
    }

    function hi2(name: string | undefined) {
        let hello = 'Hello';
        hello += ' ' + (name?.toLocaleLowerCase() || 'friend');
        console.log(hello);
    }

    hi('John');
    hi(undefined);

    hi2('John');
    hi2(undefined);

})();