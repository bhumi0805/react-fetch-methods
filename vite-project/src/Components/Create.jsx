import { useState } from "react";
import { Contexts } from "./store";
import { useContext } from "react";
import Products from "./Product";

function Create(){
   
    const {Handelchnage,Handelsubmit,obj} = useContext(Contexts)

   
    function handlechnage(e){
          console.log("hello")
           Handelchnage(e)
    }
    
      return(
        <div>
            <h1> create your products</h1>
              <form onSubmit={(e)=>Handelsubmit(e)}>
                <label> enter here title</label>
                  <input placeholder="enter title" type="text" name="title" onChange={handlechnage} value={obj.title}></input> <br /> <br />
                  <label > enter here image address</label>
                  <input placeholder="enter here image address" type="text" name="image"  onChange={handlechnage} value={obj.image}></input> <br /> <br />
                  <label > enter here desciptions</label>
                  <input  placeholder="enter here desciptions"  name="descritions"  onChange={handlechnage} value={obj.descritions}></input> <br /> <br />
                    <label > category</label>
                    <select id=""  onChange={handlechnage} name="category" value={obj.category}> 
                          <option > male's clothing</option>
                          <option > female's clothing</option>
                          <option> child collections</option>
                    </select>
                  <input type="submit" ></input>
              </form>
              <Products></Products>
        </div>
      )
}
export default Create;