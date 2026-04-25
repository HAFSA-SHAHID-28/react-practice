

const Medium = ({ title, price, colors, features }) => {




    return (
        <>

            <h3>{title}</h3>
            <ul>
                <li>Name: {title}</li>
                <li>Price: {price === 0 ? "Free" : price}</li>
                {
                    colors?.length > 0 && (<li>Color:
                        <ul>
                            {
                                colors.map((color, index) => (
                                    <li key={index}>{color}</li>
                                ))
                            }
                        </ul>
                    </li>)
                }
                {
                    features?.length > 0 && (<li>Features:
                        <ul>
                            {
                                features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))
                            }
                        </ul>
                    </li>)
                }
            </ul>



        </>
    )
}

export default Medium