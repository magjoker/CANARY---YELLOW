const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log('Made a post');
  try {
    const newBanger = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newBanger);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log('Made a post');
  try {
    await Post.update(req.body, {
      where : {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/dash/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
