(() => {
    type UserID = string | number | boolean;
    let userId: UserID;
    userId = 123;
    userId = '123';

    // Literal types
    type Sizes = 's' | 'm' | 'l';
    let shirtSize: Sizes;
    shirtSize = 's';
    shirtSize = 'm';
    shirtSize = 'l';

    function greetings(userId: UserID, size: Sizes) {
        if(typeof userId === 'string') {
            console.log(`Welcome user, ${userId.toUpperCase()} size: ${size}`);
        }
    }

    greetings(123, 's');
    greetings('nombre', 'l');


})();