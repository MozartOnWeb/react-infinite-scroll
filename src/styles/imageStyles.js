// Import Styled Components
import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 80vw;
  margin: 0px auto;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: 0px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > img {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 15px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
