// MIGRATION KNEX PARA CRIAR A TABELA PRODUTOS
// USE "npm run migrate:latest" APÓS CRIAR O DATABASE DEFINIDO EM DB_NAME NO .env
// KNEX GERENCIA O HISTÓRICO DE MIGRATIONS AUTOMATICAMENTE EM knex_migrations

exports.up = function (knex) {
  return knex.schema.createTable('produtos', function (table) {
    table.increments('id').primary();
    table.string('nome', 120).notNullable();
    table.text('descricao').notNullable();
    table.decimal('preco', 10, 2).notNullable();
    table.timestamp('data_inclusao').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('produtos');
};


