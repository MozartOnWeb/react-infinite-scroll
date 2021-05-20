import React from 'react'

// Import Styles
import { LoaderWrapper } from '../styles/loaderStyles'

const Loader = () => {
    return (
      <LoaderWrapper>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoaderWrapper>
    );
}

export default Loader
