
const Style = () => {

    const myStyles = {
        height: "200px",
        backgroundColor:"blue",
        width:"200px"
    }

  return (
    <>
        {/* internal css */}
        <div style={myStyles} className="box">Hello</div>

        {/* inline css */}
        <div style={{width:"300px", height:"300px", backgroundColor: "red"}} className="box">Hello</div>
    </>
  )
}

export default Style