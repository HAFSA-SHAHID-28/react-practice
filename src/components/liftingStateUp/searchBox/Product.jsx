import React from 'react'

const Product = ({searchText}) => {

    const products = [
        {
            id: 1,
            title: "Shampoo",
            desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita officia numquam quidem quo nobis consectetur repellendus eligendi tempora temporibus modi voluptas, officiis dicta, aliquam asperiores qui laboriosam perferendis at exercitationem nemo. Dolorum asperiores rerum molestiae eaque facilis optio et, sint quisquam, ducimus corporis neque."
        },

        {
            id: 2,
            title: "Soap",
            desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita officia numquam quidem quo nobis consectetur repellendus eligendi tempora temporibus modi voluptas, officiis dicta, aliquam asperiores qui laboriosam perferendis at exercitationem nemo. Dolorum asperiores rerum molestiae eaque facilis optio et, sint quisquam, ducimus corporis neque."
        },

        {
            id: 3,
            title: "Body Wash",
            desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita officia numquam quidem quo nobis consectetur repellendus eligendi tempora temporibus modi voluptas, officiis dicta, aliquam asperiores qui laboriosam perferendis at exercitationem nemo. Dolorum asperiores rerum molestiae eaque facilis optio et, sint quisquam, ducimus corporis neque."
        },

        {
            id: 4,
            title: "Face Wash",
            desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita officia numquam quidem quo nobis consectetur repellendus eligendi tempora temporibus modi voluptas, officiis dicta, aliquam asperiores qui laboriosam perferendis at exercitationem nemo. Dolorum asperiores rerum molestiae eaque facilis optio et, sint quisquam, ducimus corporis neque."
        },

        {
            id: 5,
            title: "Vaseline",
            desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, expedita officia numquam quidem quo nobis consectetur repellendus eligendi tempora temporibus modi voluptas, officiis dicta, aliquam asperiores qui laboriosam perferendis at exercitationem nemo. Dolorum asperiores rerum molestiae eaque facilis optio et, sint quisquam, ducimus corporis neque."
        }
    ]

    let filtered = [];
    filtered = products?.filter(
        (product) => product?.title.toLowerCase().includes(searchText?.toLowerCase())
    )

  return (
    <>
        <h1>Porducts</h1>

        {
            Array.isArray(filtered) && filtered.length > 0 ?
            filtered.map((p, i) => (
                <div  key={p.id + i}>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <hr />
                </div>
            ))
            : (
                <h1>No Match Found!</h1>
            )
        }
    </>
  )
}

export default Product