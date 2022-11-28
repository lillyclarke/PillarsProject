const router = require('express').Router();
const app = require('../app');
const {
  models: { User },
} = require('../db');

/**
 * All of the routes in this are mounted on /api/users
 * For instance:
 *
 * router.get('/hello', () => {...})
 *
 * would be accessible on the browser at http://localhost:3000/api/users/hello
 *
 * These route tests depend on the User Sequelize Model tests. However, it is
 * possible to pass the bulk of these tests after having properly configured
 * the User model's name and userType fields.
 */

// Add your routes here:
//tier three
router.delete('/:id', async (req, res, next) => {
  try {
    const userDelete = await User.findByPk(req.params.id);
    await userDelete.destory();
    res.sendStatus(204);
    if (!req.params.id) {
      return res.sendStatus(404)
    }
    if(req.params.id === isNaN) {
      return res.sendStatus(400)
    }
  } catch (error) {
    next(error)
  }
});

//tier four
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/profile', async (req, res) => {
  console.log(req.body) //await
  res.json(req.body)
})

app.post('/api/users', async (req, res, next) => {
  try{
    //expect to not be null
  } catch(err){
    next(err);
  }
})
module.exports = router;
