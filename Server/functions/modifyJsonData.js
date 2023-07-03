const modifyJsonData = (json) => {
  const updatedJson = json.map((item) => {
    let categoryArr = item.category.split(",");
    let subcategoryArr = item.subcategory.split(",");
    let featuresArr = item.features.split(";");
    let integration = item.integration.split(",");
    

    item.category = categoryArr;
    item.subcategory = subcategoryArr;
    item.features = featuresArr;
    item.integration = integration;
    return item;
  });
  return updatedJson;
};

module.exports = modifyJsonData;