import User from "../model/user.model.js";

const userResolver = {
  getUser: async ({ id }) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw new Error("Error retrieving user");
    }
  },
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw new Error("Error retrieving users");
    }
  },
  createUser: async ({ input }) => {
    const { name, email, password } = input;
    try {
      const user = new User({ name, email, password });
      await user.save();
      return user;
    } catch (err) {
      throw new Error("Error creating user");
    }
  },
  updateUser: async ({ input }) => {
    try {
      const { id, name, email, password } = input;
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, password },
        { new: true }
      );
      return user;
    } catch (err) {
      throw new Error("Error updating user");
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (err) {
      throw new Error("Error deleting user");
    }
  },
};

export default userResolver;
