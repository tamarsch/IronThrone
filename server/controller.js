exports.doPost = function (req, res) {
  const body = req.body;
  res.status(200).send({ data: 'success' });
};

exports.doGet = function (req, res) {
  const query = req.query;
  res.status(200).send({ data: 'success' });
};