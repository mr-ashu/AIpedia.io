import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./UpdateData.module.css";
import axios from "axios";
import notification from "../Toast";
import CircularIndeterminate from "./Loading";

const UpdateData = () => {
  const loaction = useLocation();
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState("");
  const [singleData, setSingleData] = useState({
    title: "",
    links: "",
    category: [],
    discountCode: "",
    price: "",
    subcategory: [],
    features: [],
  });
  const [text, setText] = useState({
    title: "",
    description: "",
    links: "",
    category: [],
    discountCode: "",
    price: "",
    subcategory: [],
    features: [],
  });
  useEffect(() => {
    let value = loaction.state;
    setSingleData((prev) => {
      return {
        ...prev,
        title: value.title,
        description: value.description,
        links: value.links,
        price: value.price,
        discountCode: value.discountCode,
      };
    });
    setImage(value.links)
    setText(loaction.state);
    document.getElementById("updateCategory").value = text.category?.join("\n");
    document.getElementById("updateSubCate").value =
      text.subcategory?.join("\n");
    document.getElementById("updatefeatures").value = text.features?.join("\n");
    document.getElementById("updatedesc").value = text.description;
  }, [text]);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setSingleData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(imageLoading){
      notification("error", "Please wait for image");
      return;
    }
    let description = document.getElementById("updatedesc").value;
    let categoryValue = document.getElementById("updateCategory").value;
    let category = categoryValue
      .trim()
      .split("\n")
      .map((ele) => ele.trim());
    let subcategoryValue = document.getElementById("updateSubCate").value;
    let subcategory = subcategoryValue
      .trim()
      .split("\n")
      .map((ele) => ele.trim());
    let featuresValue = document.getElementById("updatefeatures").value;
    let features = featuresValue
      .trim()
      .split("\n")
      .map((ele) => ele.trim());
    singleData.description = description || [];
    singleData.category = category || [];
    singleData.subcategory = subcategory || [];
    singleData.features = features || [];
    singleData.links = image || "";
    try {
      let { data } = await axios.patch(
        `${process.env.REACT_APP_APP_API}/data/update/admin/data/${text._id}`,
        singleData
      );
      notification("success", data.msg);
    } catch (error) {
      notification("error", `Something went wrong`);
    }
  };

  const handleImage = async (event) =>{
    setImageLoading(true);
    let image = event.target.files[0];
    const dataImg = new FormData();
    dataImg.append("file", image);
    dataImg.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
    let { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      dataImg
    );
    setImage(data.url);
    setImageLoading(false);
  }
 

  return (
    <div className={styles.container}>
      <h3 className={styles.loginHead}>Update Data</h3>
      <form className={styles.loginForm}>
        <div className={styles.updateInput}>
          <h6>Title</h6>
          <input
            className={styles.inputUpdate}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={singleData.title}
            required
          />
        </div>
        {/* <div className={styles.updateInput}>
          <h6>Link</h6>
          <input
            className={styles.inputUpdate}
            type="text"
            placeholder="Link"
            name="links"
            onChange={handleChange}
            value={singleData.links}
            required
          />
        </div> */}
        <div className={styles.updateInput}>
          <h6>Image</h6>
          <input
            className={styles.inputfile}
            type="file"
            placeholder="Link"
            name="links"
            onChange={handleImage}
            id="file"
            // value={singleData.links}
            required
          />
        </div>
        <div className={styles.updateImageInput}>
          {
            imageLoading?<CircularIndeterminate />: null
          }
          {
            image?<img className={styles.updateImage} src={image} alt=""/> : null
          }
        </div>
        <div className={styles.updateInput}>
          <h6>Price</h6>
          <input
            className={styles.inputUpdate}
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={singleData.price}
            required
          />
        </div>
        <div className={styles.updateInput}>
          <h6>discount</h6>
          <input
            className={styles.inputUpdate}
            type="text"
            placeholder="discount"
            name="discountCode"
            onChange={handleChange}
            value={singleData.discountCode}
          />
        </div>
        <div className={styles.updateText}>
          <h6>Category</h6>
          <textarea
            style={{ width: "100%" }}
            type="text"
            id="updateCategory"
            rows={5}
            name="category"
            className={styles.tools}
          />
        </div>
        <div className={styles.updateText}>
          <h6>Sub Category</h6>
          <textarea
            style={{ width: "100%" }}
            type="text"
            rows={2}
            id="updateSubCate"
            name="subcategory"
            className={styles.tools}
          />
        </div>
        <div className={styles.updateText}>
          <h6>Description</h6>
          <textarea
            style={{ width: "100%" }}
            type="text"
            rows={8}
            name="description"
            id="updatedesc"
            className={styles.tools}
          />
        </div>
        <div className={styles.updateText}>
          <h6>Features</h6>
          <textarea
            style={{ width: "100%" }}
            type="text"
            rows={5}
            id="updatefeatures"
            name="features"
            className={styles.tools}
          />
        </div>
        <button
          type="submit"
          className={styles.updateButton}
          onClick={handleSubmit}
        >
          update
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
