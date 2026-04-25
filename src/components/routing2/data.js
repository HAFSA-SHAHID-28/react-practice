/////////////////////////////////  post

export const fetchPosts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      return data;

    } catch (error) {
      console.log(error);

    }
  } 

// //////////////////////////////////  detail post

 export const fetchPostsD = async ({id}) => {
          try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            return data;
            
      
          } catch (error) {
            console.log(error);
      
          }
        }