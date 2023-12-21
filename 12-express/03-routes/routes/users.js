const express = require("express");
const {
  getUserdHandler,
  getSingleUserHandler,
  postUsersHandler,
} = require("../controllers/users");

const router = express.Router();

router.get("/", getUserdHandler);
router.post("/", postUsersHandler);
router.get("/:userId", getSingleUserHandler);

module.exports = router;