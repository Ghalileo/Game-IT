const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs")
// const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// userSchema.plugin(passportLocalMongoose)
// userSchema.pre("save", function(next) {
//   var user = this;
//   if (!user.isModified("password")) return next();

//   bcrypt.genSalt (SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next (err);
//     bcrypt.hash(user.password, salt, function(err,hash) {
//       if (err) return next(err);

//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch)
//   })
// }
const User = mongoose.model("User", userSchema);

// User.prototype.validPassword = function (pass) {
//   return bcrypt.compareSync(pass, this.password)
// }

// User.addHook("beforeCreate", function (user) {
//   user.password = bcrypt.hashSync(
//     user.password,
//     bcrypt.genSaltSync(10),
//     null
//   );
// });

// User.associate = function (models) {
//   User.hasMany(models.Art, { onDelete: "cascade" });
//   User.hasMany(models.Comment, { onDelete: "cascade" });
// };

module.exports = User;
