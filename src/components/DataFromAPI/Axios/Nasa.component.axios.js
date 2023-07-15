import { useEffect, useState } from "react"
import axios from "axios"

export function NasaComponent1()
{
    const[mars, setMars]= useState([]);

   function LoadPhotos(){
    
   }

    useEffect(()=>{
        LoadPhotos();
    },[]);

    return(
        <div className="container-fluid mt-3">
            <h2>Mars Rover Photos</h2>
                  <div className="d-flex flex-wrap">
                    {
                        mars.map(item=>
                            <div  key={item.id} className="card m-2 p-2" id="card">
                                <img src={item.img_src} className="card-img-top" height="200"></img>
                                <div className="card-body">
                                    <dl>
                                        <dt>Camera</dt>
                                        <dd>{item.camera.full_name}</dd>
                                        <dt>Rover</dt>
                                        <dd>{item.rover.name}</dd>
                                    </dl>
                                </div>
                             </div>
                            )
                    }
                    </div>  
            
        </div>

    )
}