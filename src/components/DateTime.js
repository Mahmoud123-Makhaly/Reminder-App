import React from 'react'
import { Row } from 'react-bootstrap'

const DateTime = ({items}) => {
  return (
    <Row>
      <h4 className='mb-3'>لديك اليوم {items.length} مواعيد</h4>
    </Row>
  )
}

export default DateTime
