

const express = require('express');
const { Post } = require('../associations');

const router = express.Router();


router.post('/users/:userId', async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.params.userId });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/users/:userId', async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.params.userId } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
