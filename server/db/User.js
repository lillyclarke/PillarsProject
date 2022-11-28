const Sequelize = require('sequelize');
const db = require('./db');

//tier five
  //do hooks so beforeUserCreate(instances, options)
  //as well as after (put down below) afterUser

const User = db.define('user', {
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   unique: true,
    //text: NOT NULL
    //use a delete, so you use it if the name is empty delete the character
    //use a casw to create different outputs? so lines above with be in a when and then add an else cuz it isn't a teacher or student
      //or use an OR operator saying if it is student or teacher it rejects it
  //}
});

//tier two, findTeachersAndMentees
const users = await User.findAll({
  include: { model: users, as: 'mentor' },
  include: {model: users, as: 'mentees'}
});

//User.findTeachersAndMentees

/**
 * We've created the association for you!
 *
 * A user can be related to another user as a mentor:
 *       SALLY (mentor)
 *         |
 *       /   \
 *     MOE   WANDA
 * (mentee)  (mentee)
 *
 * You can find the mentor of a user by the mentorId field
 * In Sequelize, you can also use the magic method getMentor()
 * You can find a user's mentees with the magic method getMentees()
 */

//users.hasMany(User, {'mentor', OR 'mentees'}); //findTeachersAndMentees //tier 2

User.belongsTo(User, { as: 'mentor' });
User.hasMany(User, { as: 'mentees', foreignKey: 'mentorId' });

module.exports = User;
