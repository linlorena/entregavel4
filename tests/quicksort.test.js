const quicksort = require('../funcoes/quicksort');

test('Ordenação de um array de números', () => {
    expect(quicksort([7, 2, 1, 6, 8, 5, 3, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Ordenação de um array com números repetidos', () => {
    expect(quicksort([5, 2, 9, 5, 3, 2, 7, 9])).toEqual([2, 2, 3, 5, 5, 7, 9, 9]);
});