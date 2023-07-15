import { useEffect, useState } from "react"

export function NasaComponent()
{
    const[mars, setMars]= useState([]);

    function LoadPhotos(){
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(function(responese){
            return responese.json();
        })
        .then(function(data){
            setMars(data.photos);
        })
    }

    useEffect(()=>{
        LoadPhotos();
    },[]);

    return(
        <div className="container-fluid mt-3">
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Photo Id</th>
                    <th>Preview</th>
                    <th>Camera</th>
                    <th>Rover</th>
                </tr>
            </thead>
            <tbody>
                {
                    mars.map(item=>
                        <tr>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.img_src} width="100" height="100"></img>
                            </td>
                            <td>{item.camera.full_name}</td>
                            <td>{item.rover.name}</td>
                        </tr>
                        )
                }
            </tbody>
            </table>
        </div>

    )
}