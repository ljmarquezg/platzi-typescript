(() => {
    let userId: string | number;
    userId = 123;
    userId = '123';

    function greetings(userId: string | number) {
        if(typeof userId === 'string') {
            console.log('Welcome user', userId.toUpperCase());
        } else {
            console.log('Welcome number', userId);
        }
    }

    greetings(123);
    greetings('nombre');
})();