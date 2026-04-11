import React from "react";
import { useState,useEffect } from "react";
import Axios from "axios";
function CrudPage(){
    const [foodName,setFoodName] = useState("");
    const [description,setDescription] = useState("");
    const [foodList,setFoodList] = useState([]);
    const [newFoodName,setNewFoodName]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    //inserted
    const addFoodData = () =>{
        Axios.post("http://localhost:3001/insert",{foodName,description})
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.error("Error adding food data:",error);
        });
    }
    //get data from database
    const fetchData = () =>{    
        Axios.get("http://localhost:3001/getFood")
        .then((response)=>{
            setFoodList(response.data);
        }
        ).catch((error)=>{
            console.error("Error fetching food data:",error);
        }
        );
    }
     //update 
    const updateFood=(id)=>{
        Axios.put(`http://localhost:3001/update`,{id,newFoodName})
        .then(()=>fetchData())
    }
    //delete
    const deleteFood=(id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>fetchData())
    }
  return(
    <div className="container mt-4">
        <h2 className="mb-4">Manage Food</h2>
        <div className="mb-3">
            <label className="form-label">Food Name</label>
            <input type="text" className="form-control" id="foodName" value={foodName} onChange={(e)=>setFoodName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
         <button className="btn btn-primary" onClick={addFoodData}>Add Food</button>
         <h3>Get Data From database</h3>
         <table className="table">
             <thead>
                 <tr>
                     <th>Food Name</th>
                     <th>Description</th>
                     <th>Edit</th>
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody>
                    {/* Map through food data and display in table rows */}
                    {foodList.map((val,key) => (
                        <tr key={key}>
                            <td>{val.foodName}</td>
                            <td>{val.description}</td>
                           <td>
                            <input type='text' placeholder='UpdatedFoodName' onChange={(e)=>setNewFoodName(e.target.value)}/>
                            <button className='btn btn-primary' onClick={()=>updateFood(val._id)}>Edit</button>
                           
                        </td>
                        <td>
                             <button className='btn btn-danger' onClick={()=>deleteFood(val._id)}>Delete</button>
                        </td>
                        </tr>
                    ))}

             </tbody>
         </table>
    </div>
  )
}
export default CrudPage;