import { useState } from "react"

export function NasaComponent()
{


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