import React, { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import Components
import { Heading, Loader, Image } from "./components";

// Import Styles
import { ImageWrapper } from "./styles/imageStyles";
import { GlobalStyles } from "./styles/globalStyles";

// Import Masonry Components
import Masonry from "react-masonry-css";

// Import Infinite Scroll Component
import InfiniteScroll from "react-infinite-scroll-component";

function App() {

  // Fetch Images from Unsplash API
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASHKEY;
    axios
      .get(
        `${apiRoot}/photos/random?client_id=${accessKey}&count=5&collections=3356576`,
      )
      .then((res) => setImages([...images, ...res.data]));
  };

  // Masonry BreakPoint Setting
  const breakpoint = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="App">
      <Heading />
      <GlobalStyles />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
        scrollThreshold={1}>
        <ImageWrapper>
          <Masonry
            breakpointCols={breakpoint}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {images.map((image) => (
              <Image url={image.urls.small} key={image.id} />
            ))}
          </Masonry>
        </ImageWrapper>
      </InfiniteScroll>
    </div>
  );
}

export default App;
