import { createContext,useState,useEffect } from "react";
export const Contexts = createContext();
function Providercontext({children}){
     const initialvalue = {
                title:"",
                image:"",
                descritions:"",
                category:""
    
                
        }
        const [obj,setobj] = useState(initialvalue);
        const [data,setdata] = useState([])
       function Handelchnage(e){
                setobj({...obj,[e.target.name]:e.target.value})
       }
       function Handelsubmit(e){
           e.preventDefault();
            console.log(obj);
            fetch("https://miniature-computing-machine-4jg96j7vrg5637pww-3000.app.github.dev/Products1",{
                     method:"POST",
                     headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data)
              fetchData()
            })

            

       }
   
       const fetchData = () => {
        fetch("https://miniature-computing-machine-4jg96j7vrg5637pww-3000.app.github.dev/Products1")
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched data:", data);
            setdata(data);
          })
          .catch((err) => console.log("Error fetching:", err));
      };
    
      // Fetch data only once when the component mounts
      useEffect(() => {
        fetchData();
      }, []);
       

      function Delete(id){
        fetch(`https://miniature-computing-machine-4jg96j7vrg5637pww-3000.app.github.dev/Products1/${id}`,{
          method:"DELETE"
         
 })
    .then((res)=>res.json())
       .then((data)=>{
      console.log(data)
          fetchData()
 })
        
      }
      
    
   
        return (
            <Contexts.Provider value={{Handelchnage,Handelsubmit,obj,data,Delete}}>
                  {children}
            </Contexts.Provider>
        )
}
export default Providercontext;