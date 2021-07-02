router.post('/add-post', async(req,res) => {
    const authId = req.authenticateUser._id
    let post = new Post({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        imgVideo: req.body.imgVideo,
        described: req.body.described,
        like: [],
        comment: [],
        space: req.body.space,
        author: req.body.author
    })
    
    if (authId) {
        await post.save((err) => {
            if (err) throw err;
            console.log('Post save successfully')
            Space.findByIdAndUpdate(post.space, {
                $push: { list_posts: post._id }
            }, { new: true }).exec((err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                }
            })
            User.findByIdAndUpdate(post.author, {
                $push: { userPost: post._id }
            }, { new: true }).exec((err) => {
                if (err) {
                    return res.status(422).json({ error: err })
                }
            })
            //})} else {
            // res.status(400).send({messError:'You must login '})
            //}
        }
        )

        res.json({ "data": post })
    }
    else {
        res.status(400).send({ messError: 'You must login ' })
    }
})

