import Image1 from "../../../assets/images/ocean.jpg"
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
       {/* <h1 class="red" >Our Gallery</h1> /// react men es tarah class nhu banate */}
       <h1 className="blue" >Our Gallery</h1>

     
    <div className="container">
      {/*direct link image ka tareka same h react men */}
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1jlzJIZvVov_n8SWHM-Zhgjw3YbhFf7qNQ&s" alt="blue rose"  width={400} height={200} />

       <br />


      {/* download image ke lia ye method use hga agr image src men rkhi ho tou */}
       <img src={Image1} alt="ocean image" width={400} height={200} />


    <br />


      {/* download image ke lia ye method use hga agr image public folder men rkhi ho tou */}
       <img src="/images/butterfly.webp" alt="butterfly image" width={400} height={200} />
    </div>

    </>
  )
}

export default Gallery