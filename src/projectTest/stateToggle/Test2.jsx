import { useState } from "react"

const Test2 = () => {

    const [hi, setHi] = useState(false);
    const [bye, setBye] = useState(false);

    return (
        <>


            {hi && <p>Hello Hafsa </p>}
            {bye && <p>Bye Hafsa </p>}

            <button
                onClick={() => {
                    setHi(prev => !prev);
                    setBye(false);
                }}>
                Toggle Hello
            </button>
            <button
                onClick={() => {
                    setBye(prev => !prev);
                    setHi(false);
                }}
            >Toggle Bye
            </button>
        </>
    )
}

export default Test2