(() => {
    let prices = [1,2,3,3,4,5,56,, 'hola', true];
    let products = ['hola', true];

    let mixed: (number |string | boolean)[] = [1,2];
    mixed.push('hola');
    mixed.push(true);
})();