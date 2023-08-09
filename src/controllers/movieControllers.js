import movies from "../models/movies.json" assert { type: "json" };

const getAll = (req, res) => {
  res.status(200).send(movies);
};

export default {
  getAll,
};
