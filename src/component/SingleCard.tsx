import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/col"
import { useState } from 'react';
import { useEffect } from 'react';
import { mycard } from './interfaces';
import Row from'react-bootstrap/row';
import { Link } from 'react-router-dom';









function SingleCard() {
    const [card, setCard] = useState<mycard[]>([]);
    const chiamata= async()=>{
        try {
            let response = await fetch(
              'https://api.spaceflightnewsapi.net/v3/articles'
            )
            if (response.ok) {
              let data = await response.json()
              console.log(data)
             
              setCard(data)
             
            } else {
              alert('response NOT ok')
            }
          } catch (error) {
            console.log('error', error)
          }
    }
useEffect(() => {
    chiamata()
},[])

  return (
    <>
    <Row className='my-5 justify-content-center'>
{card.map((item)=>(
   <Card className='bg-dark mx-1 my-1 border border-white rounded-5 overflow-hidden' style={{ width: '18rem'}}>
   <Card.Img variant="top" src={item.imageUrl}  />
   <Card.Body className='bg-dark text-light'>
     <Card.Title>{item.title}</Card.Title>
     <div className='overflow-auto'>
         <Card.Text >
            <>
                 {item.summary}
            </>
  

     </Card.Text>
     </div>
    
    <Button variant="warning" className='text-center'>Go somewhere</Button>
    
   </Card.Body>
 </Card>
))}
   </Row>
    </>
  );
}

export default SingleCard;