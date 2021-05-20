import React, { useContext } from "react";

// Import Context
import { ImageContext } from "./ImageContext";

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
  const [images] = useContext(ImageContext);
  const fetchImages = useContext(ImageContext);

  return (
    <div className="App">
      <Heading />
      <GlobalStyles />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
        scrollThreshold={0.9}>
        <ImageWrapper>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {images.map((image) => (
              <Image url={image.urls.thumb} key={image.id} />
            ))}
          </Masonry>
        </ImageWrapper>
      </InfiniteScroll>
    </div>
  );
}

export default App;
