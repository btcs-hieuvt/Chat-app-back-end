const {
  register,
  login,
  setAvatar,
  getAllUsers,
  firebaseLogin,
  checkUsername,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/firebaseLogin", firebaseLogin);
router.post("/setAvatar/:id", setAvatar);
router.post("/checkusername", checkUsername);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
