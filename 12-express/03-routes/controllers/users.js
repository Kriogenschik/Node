const getUserdHandler = (req, res) => res.send("Get users route");

const getSingleUserHandler = (req, res) => {
  res.send(`Get users route. user ID ${req.params.userId}`);
};

const postUsersHandler = (req, res) => res.send("Post users route");

module.exports = {
  getUserdHandler,
  getSingleUserHandler,
  postUsersHandler
}