import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Action = ({deleteData ,showData}) => {
  
  return (
    <Row>
        <Col><Button onClick={deleteData} className='btn btn-style py-2'>مسح الكل </Button> </Col>
        <Col  className="text-start"><Button onClick={showData}  className='btn btn-style py-2'>عرض الكل </Button> </Col>
    </Row>
  )
}

export default Action
