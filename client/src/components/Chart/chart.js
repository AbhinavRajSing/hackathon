import React from "react"

const Chart = () =>{

    let arr = JSON.parse(localStorage.getItem("patient"))

    return(
        <div>
            {arr.length==6?<p>Todays all Slots full</p>:<p>{6-arr.length} Slots remaining</p>}
            <table border="1px">
                <thead>
                    <th>Name</th>
                    <th>Problem</th>
                </thead>
                <tbody>
                    {arr.map(item => <tr>
                    <td>{item.name}</td>
                    <td>{item.problem}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Chart