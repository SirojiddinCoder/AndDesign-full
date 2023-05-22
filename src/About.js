import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <h1>About page</h1>
    <h2>Products</h2>
    <div className="cards">
       
         <Card style={{ width: '15rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBEqS7VI_QsqHJzmOMOMd6wrhkwOxAxlGsw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Macbook pro</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Sotib Olish</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBEqS7VI_QsqHJzmOMOMd6wrhkwOxAxlGsw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Macbook pro</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
               <Button variant="primary">Sotib Olish</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBEqS7VI_QsqHJzmOMOMd6wrhkwOxAxlGsw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Macbook pro</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
               <Button variant="primary">Sotib Olish</Button>
      </Card.Body>
    </Card>
         <Card style={{ width: '18rem' }}>
      <Card.Img className="desktop-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBEqS7VI_QsqHJzmOMOMd6wrhkwOxAxlGsw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Macbook pro</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
               <Button variant="primary">Sotib Olish</Button>
      </Card.Body>
    </Card>

    </div>
    </>
  )
}
