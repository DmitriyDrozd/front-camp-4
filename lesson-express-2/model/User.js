const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, default: 'John' },
    lastName: { type: String, default: 'Doe' },
    created: { type: Date, default: Date.now },
});

UserSchema.virtual('password').set(function(value) {
    this.passwordHash = bcrypt.hashSync(value, 12);
});

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
