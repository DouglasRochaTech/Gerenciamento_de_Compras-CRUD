# Gerenciamento_de_Compras-CRUD
É um programa smples de gerenciamento de compras!

## Como rodar:

1. Instalar dependências:

```bash
npm install
```

2. Criar `.env` na raiz com as configurações do MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_database
PORT=3000
```

3. Criar o database no MySQL com o nome de `DB_NAME`.

4. Rodar a migration:

```bash
npm run migrate:latest
```

5. Iniciar o servidor:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Endpoints principais

- `GET /produtos`
- `GET /produtos/:id`
- `POST /produtos`
- `PUT /produtos/:id`
- `DELETE /produtos/:id`

## Equipe

- Douglas Rocha
- Pedro Henrique Coelho Lima
- Jonas
- Calebe
- Raphael
