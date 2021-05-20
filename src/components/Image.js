import React from 'react'

// Import Styles
import { Img } from '../styles/imageStyles'

const Image = ({url}) => {
    return (
        <Img src={url} alt="image" />
    )
}

export default Image
