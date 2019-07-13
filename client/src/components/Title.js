import React from 'react'

const Title = ({heading, lead}) => {
    return (
     <div className="section-title text-center">
       <h3>{heading}</h3>
       <p>{lead}</p>
     </div>
    )
}

export default Title
