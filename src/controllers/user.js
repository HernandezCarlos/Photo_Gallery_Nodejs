const User = require('../models/users');
const Car = require('../models/cars');

module.exports = {
    index: async (req, res, next) => {  
        const users = await User.find();
        res.status(200).json(users);
  },

    newUser: async (req, res, next) => {
      const newUser =  new User(req.body);
      const user = await newUser.save();
      res.status(200).json(user);
  },

   getUser: async (req, res, next) => {
       const { userId } = req.params;
       const user =  await User.findById(userId);
       res.status(200).json(user);
   },

   replaceUser: async (req, res, next) => {
        const {userId} = req.params; 
        const newUser =  req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true})
   },

   updateUser: async (req, res, next) => {
       const { userId } = req.params;
       const newUser = req.body;
       const oldUser = await User.findByIdAndUpdate(userId, newUser);
       res.status(200).json({ success: true })
   },

   deleteUser: async (req, res, next) => {
       const {userId} = req.params;
       const response = await User.findByIdAndRemove(userId);
       res.status(200).json({success: true})
   },

   getUsersCars: async (req, res, next) => {
       const {userId} = req.params;
       const user = await User.findById(userId);
       res.status(200).json(user);
   },

   newUserCar: async (req, res, next) => {
       const {userId} = req.params;
       const newCar = new Car(req.body);
       const user = await User.findById(userId).populate('cars');
       newCar.venderdor = user;
       await newCar.save();
       user.autos.push(newCar);
       await user.save();
       res.status(200).json(newCar);
   }
}