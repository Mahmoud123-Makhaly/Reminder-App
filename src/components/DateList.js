import React from 'react'
import { Row } from 'react-bootstrap'
import Notfound from './Notfound'
const DateList = ({items}) => {
  return (
<Row className='my-2'>
<div className='date-list'>
   {

items.length?(
    items.map((item ,  index)=>{
        return(
            <div key={index} className='date-item d-flex py-2'>
<img src={item.src}></img>
<div className='date-item-info'>
    <p>{item.name}</p>
    <span>{item.date}</span>
</div>
</div>
        )
    })
):(<Notfound/>)

   
   }
    </div>
</Row>
  )
}

export default DateList
