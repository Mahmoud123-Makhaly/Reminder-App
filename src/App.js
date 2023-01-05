import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import DateTime from './components/DateTime'
import DateList from './components/DateList'
import Action from './components/Action'
import { items } from './data'

const App = () => {
const [text , setText] = useState(items)
const deleteData = ()=>{
  setText([])
}
const showData =()=>{
  setText(items)
}
  return (
    <div  className='font body d-flex justify-content-center'>
   <div className='body-conent'>
<DateTime items ={text}/>
<DateList items = {text} />
<Action deleteData={deleteData} showData={showData}/>
   </div>
    </div>
  )
}

export default App
