import { useContext } from "react";
import { Contexts } from "./store";
function Products(){
      const {data,Delete} = useContext(Contexts)
    return(
        <div>
             {data && data.map((ele, index) => (
  <div key={index}>
    <h1>{ele.title}</h1>
    <img src={ele.image} alt="product" />
    <h2>{ele.description}</h2>
    <p>{ele.category}</p>
    <button onClick={()=>Delete(ele.id)}> delete</button>
  </div>
))}

        </div>
    )
}
export default Products;