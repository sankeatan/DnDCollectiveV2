// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

<<<<<<< HEAD
// const characterPostSchema = new Schema({
//   postText: {
//     type: String,
//     required: 'You need to leave a thought!',
//     minlength: 1,
//     maxlength: 10000,
//     trim: true,
//   },
//   postAuthor: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
// });
=======
const characterBuildSchema = new Schema({
  character:
        {
          type: Schema.Types.ObjectId,
          ref: 'Character',
        },
  postText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 10000,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});
>>>>>>> 19fd12d9da1e1e51f8ad668c1123ba52a083914f

// const CharacterBuild = model('CharacterBuild', characterBuildSchema);

// module.exports = CharacterBuild;
