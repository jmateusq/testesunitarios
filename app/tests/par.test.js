const ehPar = require('../codes/par');

test('retorna true para um numero par', () => {
  expect(ehPar(4)).toBe(true);
});

test('retorna true para um numero em string par', () => {
    expect(ehPar('4')).toBe(true);
});

test('retorna false para um numero impar', () => {
    expect(ehPar(5)).toBe(false);
});

test('retorna false para um numero em string impar', () => {
    expect(ehPar("5")).toBe(false);
});