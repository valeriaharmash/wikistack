const express = require('express');
//require the addPage module from the views folder
const { addPage, wikiPage, main } = require('../views');
const { Page, User } = require('../models');

const wikiRouter = express.Router();

wikiRouter.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

wikiRouter.post('/', async (req, res, next) => {
  try {
    const { author, email, title, content, status } = req.body;

    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: author,
        email: email,
      },
    });

    const page = await Page.create({
      title: title,
      content: content,
      status: status,
    });
    // add authorId for page table
    await page.setAuthor(user);

    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

wikiRouter.get('/add', (req, res) => {
  res.send(addPage());
});

wikiRouter.get('/:slug', async (req, res, next) => {
  try {
    const slugValue = req.params.slug;
    const page = await Page.findOne({ where: { slug: slugValue } });

    const author = await page.getAuthor();

    res.send(wikiPage(page, author));
  } catch (error) {
    next(error);
  }
});

module.exports = wikiRouter;
