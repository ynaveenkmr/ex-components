import React, {useState, useEffect} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, Jumbotron
} from 'reactstrap';

const Hello = (props) => { 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
 async function getData() {
    setLoading(true);
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=12');
    const data = await response.json();
    setData(data);
      setLoading(false);
  }

  useEffect(() => {    
    getData();
   
  }, []);


  if (loading) {
    return <p>Loading Users...</p>;
  }
  
  return (
    <>
    <Jumbotron >
 <Container fluid>
 <Row>
 
  {data.map(el => (
        
      <Card key={el.id} style={{width:"15em", marginBottom:'5%',marginLeft:'2%'}}>
     
<CardImg top src={el.download_url} alt="Card image cap" />
        <CardBody>
        
          <CardTitle>{el.id}</CardTitle>
          <CardSubtitle>{el.author}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <a href={el.download_url} className="alert-link">Downlaod</a>
        </CardBody>
       
        
         
      </Card>
      ))}
      </Row>
      
       </Container>
       </Jumbotron>
    </>
  );
};

export default Hello;
