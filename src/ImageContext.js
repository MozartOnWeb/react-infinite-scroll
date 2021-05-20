import React, { useState, useEffect, createContext } from "react";

// Import Axios
import axios from "axios";

// Create Context
export const ImageContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  
  useEffect(() => {
    fetchImages();
  }, []);
    
  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASHKEY;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));
    };
    
  return (
    <ImageContext.Provider value={[images, setImages]} value2={fetchImages} >
      {children}
    </ImageContext.Provider>
  );
};
