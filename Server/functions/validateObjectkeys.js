const validateObjectKeys = (obj) => {
  const requiredKeys = [
    "category",
    "subcategory",
    "title",
    "links",
    "description",
    "price",
    "features",
    // "image",
  ];

  const arrayOfkeys = Object.keys(obj);

  let constructObj = {};

  arrayOfkeys.forEach((item, idx) => {
    constructObj[item] = idx + 1;
  });

  for (let item of requiredKeys) {
    if (!constructObj[item]) {
      return { status: false, message: `Please include ${item}` };
    }
  }

  return { status: true, message: "everything is fine" };
};

module.exports = validateObjectKeys;
