

const PropCard = ({ title, price, variations, color }) => {
    // console.log(color);

    return (
        <>

            <h3>{title}</h3>
            <ul>
                <li>
                    Price: {price || "free"}
                </li>
                <li>
                    Color: {color || "black"}
                </li>
            </ul>
            <hr />

            {/* {
                color ? <h3>Colors</h3> : ""
            } */}
            {/* better way for this ! */}

            {color && <h3>Colors</h3>}

            <ul>
                {
                    color ? color?.map((clr, index) => (
                        <li key={index}>{clr}</li>
                    ))
                        : ""
                }

            </ul>

            {
                variations && (
                    <>
                        <h3>Variations</h3>
                        <ul>
                            {Object.entries(variations).map(([size, price], index) => (
                                <li key={index}>{size}: {price}</li>

                            ))}
                        </ul>

                    </>
                )
            }


        </>
    )
}

export default PropCard