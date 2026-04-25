
const Easy = ({title, price}) => {
  return (
   <>
   <div>
    <h3>{title}</h3>
    <p>{price || "free"}</p>
   </div>
   </>
  )
}

export default Easy