# Usar Knex Migrations com PHPMyAdmin
  
  ![Captura de tela do MySQL PHPMyAdmin](./phpmyadmin-usando-script.png)
Siga a sequência indicada na figura acima:
1. Crie o database no PHPMyAdmin com o mesmo nome definido em `DB_NAME` no arquivo `.env`.
2. Verifique que o schema foi criado corretamente.
3. Execute `npm run migrate:latest` no terminal para criar a tabela `produtos` via Knex.
4. Se necessário, use `npm run migrate:rollback` para desfazer a última migration.
  
Depois de executar a migration, você pode usar a interface do PHPMyAdmin para visualizar a tabela `produtos` ou executar consultas como:
```
SELECT * FROM produtos;
```