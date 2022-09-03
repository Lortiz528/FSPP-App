const capitalizeName = (name) => {
  let arr = name.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ');
};

const checkValues = (req, res, next) => {
  if (req.body.name) {
    if (
      req.body.image === '' ||
      req.body.image === undefined ||
      req.body.image === null
    ) {
      req.body.image =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637';
    }
    if (
      req.body.quantity === '' ||
      req.body.quantity === undefined ||
      req.body.quantity === null ||
      req.body.quantity <= 0
    ) {
      req.body.quantity = 1;
    }
    next();
  } else {
    res.status(400).json({
      error:
        'You are missing required keys. Please make sure you have: name, quantity, series, boxed status, and image along with their appropriate values.',
    });
  }
};

module.exports = {
  capitalizeName,
  checkValues,
};
