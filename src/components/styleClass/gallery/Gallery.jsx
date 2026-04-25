
import Image1 from "../../../assets/images/ocean.jpg"
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
      <h1 className="blue" >Our Gallery</h1>

      <div className="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1jlzJIZvVov_n8SWHM-Zhgjw3YbhFf7qNQ&s" alt="blue rose" width={400} height={200} />

        <br />

        <img src={Image1} alt="ocean image" width={400} height={200} />

        <br />

        <img src="/images/butterfly.webp" alt="butterfly image" width={400} height={200} />
      </div>

    </>
  )
}

export default Gallery