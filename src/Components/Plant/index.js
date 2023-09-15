import React from 'react'
import css from './Plant.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Plant = ({name, image, link}) => {
  return (
    // <div>
    <Card className={css.card}>
       <Card.Img variant="top" src={image} />
      {/* <Card.Body className={css.card}> */}
    <Link to="/plantinfo"><Card.Title className={css.cardTitle}>{name}</Card.Title></Link>
    {/* </Card.Body> */}
    </Card>
    // </div>
  )
}

export default Plant;