const router = require('express').Router();

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


router.get('/', (req, res) => {
    console.log(req.session);

    res.render('homepage', {
        id: 1, 
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebar Docs',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});




module.exports = router;