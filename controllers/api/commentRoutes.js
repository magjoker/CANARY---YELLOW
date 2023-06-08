const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('Made a comment');
    try {
        const newComment = await Comment.create({
            body: req.body.commentBody,
            userId: req.session.user_id,
            postId: req.body.postId,
        });

        res.status(200).json(newComment);
        } catch (err) {
            res.status(400).json(err);
        }
    });






module.exports = router;