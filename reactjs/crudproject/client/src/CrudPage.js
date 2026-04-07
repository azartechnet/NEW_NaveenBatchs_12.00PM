import React from "react";
import { useState } from "react";
import Axios from "axios";
function CrudPage(){
    const [foodName,setFoodName] = useState("");
    const [description,setDescription] = useState("");

    //inserted
    const addFoodData = () =>{
        Axios.post("http://localhost:3001/insert",{foodName,description})
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.error("Error adding food data:",error);
        });
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
    </div>
  )
}
export default CrudPage;