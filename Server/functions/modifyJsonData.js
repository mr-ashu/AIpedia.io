const modifyJsonData = (json) => {
  const updatedJson = json.map((item) => {
    // let categoryArr = item.category.split(",");
    // let subcategoryArr = item.subcategory.split(",");
    // let featuresArr = item.features.split(";");
    // let integration = item.integration.split(",");
    

    // item.category = categoryArr;
    // item.subcategory = subcategoryArr;
    // item.features = featuresArr;
    // item.integration = integration;
    let key_features = item['Key features'].trim().split(";").map(element => element.replace(/[\n\s]+/g, ''));
    delete item['Key features'];
    let Tags = item.Tags.trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
    let price_amount = item['Price amount'];
    delete item['Price amount'];
    let works_with = item["Works with"].trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
    delete item["Works with"];
    let others_features = item['Others features'].trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
    delete item['Others features'];
    let social_media = item['Social Media (Facebook,instagam, twitter, likendin, discord, reddit, youtube)'].trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
    delete item['Social Media (Facebook,instagam, twitter, likendin, discord, reddit, youtube)'];
    let Galary_image = item['Galary_image'].trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
    delete item["Paid(check box)"];
    let Note = item.Note.trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
   
    let  Dashboard = item.Dashboard.trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
   
    let Category = item['Category'].trim().split(",").map(element => element.replace(/[\n\s]+/g, ''));
   
    
    item.isActive = true;
    item.key_features = key_features;
    item.Tags = Tags;
    item.price_amount = price_amount;
    item.works_with = works_with;
    item.others_features = others_features;
    item.social_media = social_media;
    item.Galary_image = Galary_image;
    item.paid = false;
    item.Note=Note;
    item.Dashboard=Dashboard;
    item.Category=Category;

    return item;
  });
  return updatedJson;
};

module.exports = modifyJsonData;