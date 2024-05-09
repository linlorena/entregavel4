const numeroprimo = require('../funcoes/numeroprimo')

test('', () => {
    expect(numeroprimo(13)).toEqual(true);
});
test('', () => {
    expect(numeroprimo(10)).toEqual(false);
});