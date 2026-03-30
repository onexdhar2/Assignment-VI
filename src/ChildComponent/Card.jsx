import React from 'react'

const Card = ({carts}) => {
    console.log(carts)
  return (
    <div>
      <h1>your</h1>
      {carts.map(item=><div key={item.id}>
        <div>
            {item.name}
        </div>
      </div>)}
    </div>
  )
}

export default Card
