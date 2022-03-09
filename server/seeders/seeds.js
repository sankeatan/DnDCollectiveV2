// const db = require('../config/connection');
// const { User, Thought } = require('../models');
// const Skill = require('../models/skill');

// const userSeeds = require('./userSeedss.json');
// const thoughtSeeds = require('./thoughtSeedss.json');
// const skillSeeds = require('./5e-SRD-Skills.json');
// // const { Skill } = require('../models');

// db.once('open', async () => {
//   try {
//     await Skill.deleteMany({});
//     await Thought.deleteMany({});
//     await User.deleteMany({});

//     await User.create(userSeeds);
//     await Skill.create(skillSeeds);

//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }
//     for (let i = 0; i < skillSeeds.length; i++) {
//       const skill = await Skill.findOneAndUpdate(
//         {_id: mongoose.Schema.ObjectId},
//         { index: String },
//         { name: String},
//         {desc: Array},
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });
