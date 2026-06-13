const db = require('../db/knex');

exports.obter = async (req, res) => {
  try {
    const produto = await db("produtos").where({ id: req.params.id }).first();
    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar produto" });
  }
};

exports.listar = async (req, res) => {
  try {
    const produtos = await db('produtos');
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar produtos' });
  }
};

exports.inserir = async (req, res) => {
  try {
    const { nome, descricao, preco, data_inclusao } = req.body;
    await db('produtos').insert({ nome, descricao, preco, data_inclusao });
    res.status(201).json({ mensagem: 'Produto inserido com sucesso' });
  } catch (err) {
    console.error('Erro inserir produto:', err);
    res.status(500).json({ erro: 'Erro ao inserir produto' });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco, data_inclusao } = req.body;
    await db('produtos').where({ id }).update({ nome, descricao, preco, data_inclusao });
    res.json({ mensagem: 'Produto atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar produto' });
  }
};

exports.excluir = async (req, res) => {
  try {
    const { id } = req.params;
    await db('produtos').where({ id }).del();
    res.json({ mensagem: 'Produto excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir produto' });
  }
};
