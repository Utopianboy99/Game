import React from 'react'

const User = ({ name, age, img }) => {
    return (
        <div style={{ border: "1px solid red", height: "30px", width: "80px", marginTop: "50px" }}>{name} {age}</div>
    )
}

export default User