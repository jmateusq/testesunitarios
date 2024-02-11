const Cleiton = require("../codes/cleiton");

test('Cria um Cleiton com tipo e som',()=>{
    const cleiton = new Cleiton('Rasta','cabeça de gelo');
    expect(cleiton.tipo).toBe('Rasta');
    expect(cleiton.som).toBe('cabeça de gelo');
});

test('Testa a apresentação',()=>{
    const cleiton = new Cleiton('Rasta','cabeça de gelo');
    expect(cleiton.apresentacao()).toBe('Cleiton Rasta ao som do cabeça de gelo, olha a pedra');
});
