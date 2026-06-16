# Usar Knex Migrations com MySQL Workbench
  
Siga a seguinte sequência:
1. Clique na palavra `Schemas` para ver a lista de schemas existentes.
2. Crie o database com o mesmo nome definido em `DB_NAME` no arquivo `.env`.
3. Verifique que o schema foi criado corretamente.
4. Execute `npm run migrate:latest` no terminal para criar a tabela `produtos` via Knex.
5. Se necessário, use `npm run migrate:rollback` para desfazer a última migration.

Se clicar com o botão direito do mouse sobre o nome do schema `tungtungtungsahur` aparecerá a opção `set as default schema`. Use essa opção para selecionar esse schema e executar consultas como:
```
SELECT * FROM produtos;
```