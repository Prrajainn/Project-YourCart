import express from 'express';
import User from '../models/userMode';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {  
    const user = new User({
      name: 'Prakhar',
      email: 'prrakharjainn@gmail.com',
      password: '1234',
      isAdmin: true
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;    