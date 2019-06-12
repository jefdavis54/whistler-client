import { Artwork } from '../lib/typsescriptInterfaces'
import Link from 'next/link'

const Artwork = (artwork: Artwork) => {
  const imageLink = "./images/" + artwork.imageThmName
  const artistLink = "/artist/?query=placeholder"
  const locationLink = "/location?query=placeholder"
  return (
    <div className="artwork">
      <h2 className="header">Artwork</h2>
      <h3 className="name">{artwork.workName}</h3>
      <h4 className="artist">
        <Link href={artistLink}>
          <a>Artist Name</a>
        </Link>
      </h4>
      <h4 className="location">
        <Link href={locationLink}>
          <a>Location of Artwork</a>
        </Link>
      </h4>
      <div className="left">
        <div className="label">Label Example</div>
        <div className="value">Value Example</div>
      </div>
      <div className="right">
        <img src={imageLink} height={artwork.imageThmHeight} width={artwork.imageThmWidth} />
      </div>
    </div>
  )
}

export default Artwork