import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ListModal } from "../Components/ListModal";
 
 

const SearchPage = () => {
  const location = useLocation();
  const [seacrchData, setSearchdata] = useState("");
  let [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/data/get?search=${seacrchData}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSearchdata(location.state);
    getData();
  }, [location.state]);

 
  return (
    <div>
  
      <div >
        {data.map((el) => (
          <ListModal el={el}   />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
