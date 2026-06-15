exports.seed = async function(knex) {
  await knex('produtos').del();

  await knex('produtos').insert([
    { nome: 'Café', descricao: 'Cafeína pura!', preco: 100.00, data_inclusao: '2026-01-01 00:00:00' },
    { nome: 'Arroz', descricao: 'Grão nutritivo!', preco: 200.00, data_inclusao: '2026-01-01 00:00:00' },
    { nome: 'Feijão', descricao: 'Grão nutritivo!', preco: 300.00, data_inclusao: '2026-01-01 00:00:00' }
  ]);
};
