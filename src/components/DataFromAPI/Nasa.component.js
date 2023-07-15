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
            </table>
        </div>

    )
}