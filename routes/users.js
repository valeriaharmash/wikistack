const express = require('express');
const userRouter = express.Router();
const { User, Page } = require('../models');
const { userList, userPages } = require('../views');

userRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

userRouter.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    const posts = await Page.findAll({ where: { authorId: user.id } });

    res.send(userPages(user, posts));
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
