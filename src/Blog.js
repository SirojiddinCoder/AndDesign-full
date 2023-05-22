import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <h1>Blog page</h1>
    <h2>Products</h2>
    <div className="cards">
       
         <Card style={{ width: '15rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUWPit_gZEjJHn1ahtKS_L5-db95Bgfqniw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button variant="primary">ADD TO CARDS</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUWPit_gZEjJHn1ahtKS_L5-db95Bgfqniw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button variant="primary">ADD TO CARDS</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUWPit_gZEjJHn1ahtKS_L5-db95Bgfqniw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button variant="primary">ADD TO CARDS</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUWPit_gZEjJHn1ahtKS_L5-db95Bgfqniw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Button variant="primary">ADD TO CARDS</Button>
      </Card.Body>
    </Card>

    </div>
    </>
  )
}
