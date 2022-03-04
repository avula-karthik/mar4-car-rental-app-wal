import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
const Employee = () => {
    let [data, setData] = useState([])
    useEffect( ()=>{
        axios.get("employees.json")
        .then( response => setData(response.data) )
    },[] )
    return( 
        <div>
            <h2>Current Employee Details</h2>
            <table>
            <tr>
                <th>Name</th>
                <th>Location</th>
            </tr>
            {
                data.map( (val,index) => {
                    return(
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.loc}</td>
                        </tr>
                    )
                } )
            }
    
        </table>
        </div>
        
    )
}
export default Employee