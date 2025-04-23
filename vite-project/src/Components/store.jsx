import { createContext,useState } from "react";
export const Contexts = createContext();
function Providercontext({children}){
     const initialvalue = {
                title:"",
                image:"",
                descritions:"",
                category:""
    
                
        }
        const [obj,setobj] = useState(initialvalue);
       function Handelchnage(e){
              
                 setobj({...obj,[e.target.name]:e.target.value})
       }
       function Handelsubmit(e){
           e.preventDefault();
            console.log(obj);
       }
       function Fetchdata(){
            
       }
        return (
            <Contexts.Provider value={{Handelchnage,Handelsubmit,obj}}>
                  {children}
            </Contexts.Provider>
        )
}
export default Providercontext;