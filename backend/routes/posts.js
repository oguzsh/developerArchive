const router = require('express').Router();
let Post = require('../models/post.model');


/* ======== ALL POSTS ======== */
router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error ' + err));
})


/* ======== SEARCH ID POST ======== */
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
})

/* ======== SEARCH TAG POST ======== */
router.route('/tag/:post_label').get((req, res) => {
    Post.find({ "post_label": req.params.post_label })
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
})


/* ======== DELETE POST ======== */
router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => res.json("Post deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
})


/* ======== UPDATE POST ======== */
router.route('/update/:id').post((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.post_title = req.body.post_title;
            post.post_desc = req.body.post_desc;
            post.post_url = req.body.post_url;
            post.post_label = req.body.post_label;

            post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

    .catch(err => res.status(400).json('Error: ' + err));
});

/* ======== ADD POST ======== */
router.route('/add').post((req, res) => {
    const post_title = req.body.post_title;
    const post_desc = req.body.post_desc;
    const post_url = req.body.post_url;
    const post_label = req.body.post_label;

    const newPost = new Post({
        post_title,
        post_desc,
        post_url,
        post_label
    });

    newPost.save()
        .then(() => res.json('Post added'))
        .catch(err => res.status(400).json('Error ' + err));
})

module.exports = router;