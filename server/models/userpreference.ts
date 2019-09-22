import * as mongoose from 'mongoose';

const userpreferenceSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  colorpreference: String,
});

const UserPreference = mongoose.model('UserPreference', userpreferenceSchema);

export default UserPreference;
