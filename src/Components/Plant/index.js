import React from 'react'
import css from './Plant.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Plant = ({name, image, id}) => {
  // const {id} = useParams();
  return (
    // <div>
    <Card className={css.card}>
       <Card.Img variant="top" src={image} />
      {/* <Card.Body className={css.card}> */}
    <Link to={`/plantpage/${id}`} className={css.link}><Card.Title className={css.cardTitle}>{name}</Card.Title></Link>

    </Card>
    // </div>
  )
}

export default Plant;