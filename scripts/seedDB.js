const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/game-it", {
  useNewUrlParser: true
});

const userSeed = [
  {
    name: "max",
    username: "madmax",
    password: "furyroad",
    date: new Date(Date.now())
  }, {
    name: "jake",
    username: "rick",
    password: "tickingclock",
    date: new Date(Date.now())
  }, {
    name: "jackson",
    username: "testtube",
    password: "jacksonisgreat",
    date: new Date(Date.now())
  }, {
    name: "emily",
    username: "queenbee",
    password: "sugercube",
    date: new Date(Date.now())
  }
];

const threadSeed = [
  {
    userId: 1,
    username: "madmax",
    topicName: "Madmax fury road",
    content: "what everyones thoughts",
    date: new Date(Date.now())
  }, {
    userId: 2,
    username: "rick",
    topicName: "How far will C9 make it this year",
    content: "i dont think they will go to far",
    date: new Date(Date.now())
  }, {
    userId: 1,
    username: "madmax",
    topicName: "Thoughts on valorant anyone",
    content: "i love the game personally",
    date: new Date(Date.now())
  }, {
    userId: 4,
    username: "queenbee",
    topicName: "anyone playing Last oasis",
    content: "need people to play with",
    date: new Date(Date.now())
  }, {
    userId: 3,
    username: "rick",
    topicName: "what champ doing you think riot will showcase next",
    content: "I hope its another jg id love to add them to my rotation",
    date: new Date(Date.now())
  }
];

const commentSeed = [
  {
    userId: 2,
    threadId: 1,
    comment: "the game sucks.",
    date: new Date(Date.now())
  }, {
    userId: 4,
    threadId: 1,
    comment: "is it any good watched some game play on it seemed ok.",
    date: new Date(Date.now())
  }, {
    userId: 2,
    threadId: 1,
    comment: "nah not worth your time queen.",
    date: new Date(Date.now())
  }, {
    userId: 4,
    threadId: 2,
    comment: "I think they have a good shot of making it all the way this year.",
    date: new Date(Date.now())
  }, {
    userId: 3,
    threadId: 3,
    comment: "Im currenttly playing it all day for the most part, hit me up if your looking to group.",
    date: new Date(Date.now())
  }, {
    userId: 4,
    threadId: 3,
    comment: "glad to been looking for people to play with sucks playing Last Oasis on your own to many large groups.",
    date: new Date(Date.now())
  }, {
    userId: 1,
    threadId: 5,
    comment: "they need better top laners",
    date: new Date(Date.now())
  }
];

  db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Comment.deleteMany({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Thread.deleteMany({})
  .then(() => db.Thread.collection.insertMany(threadSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });