import React from 'react'

function Coursepage(props) {
  return (
    <>
    <tr>
        <td>
        {props.name}
        </td>
        <td>
        {props.studentid}
        </td>
    </tr>
    
    </>
  )
}

export default Coursepage
