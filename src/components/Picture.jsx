import * as React from "react"
import { Link } from "gatsby"

const Picture = (image) => {
  return (
    <div >
        <picture >
            <source srcset={image.url + "?w=480&r=30&fm=avif"} type="image/avif" media="(max-width:480px)"/>
            <source srcset={image.url + "?w=768&r=30&fm=avif"} type="image/avif" media="(max-width:768px)"/>
            <source srcset={image.url + "?w=1024&r=30&fm=avif"} type="image/avif"/>
            <source srcset={image.url + "?w=480&r=30&fm=webp"} type="image/webp" media="(max-width:480px)"/>
            <source srcset={image.url + "?w=768&r=30&fm=webp"} type="image/webp" media="(max-width:768px)"/>
            <source srcset={image.url + "?w=1024&r=30&fm=webp"} type="image/webp"/>
            <img src={image.url} alt="" />
        </picture>
    </div>
  )
}

export default Picture