import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, Jumbotron
} from 'reactstrap';


function SearchBar() {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPics, setFilteredPics] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=12")
      .then(res => {
        setPics(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredPics(
      pics.filter(country =>
        country.author.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pics]);

  if (loading) {
    return <p>Loading Pics...</p>;
  }

  return (
    <div className="SearchBar">
      <h1>Pics Lists</h1>
      <input
        type="text"
        placeholder="Search Pics"
        onChange={e => setSearch(e.target.value)}
      
      />
      {filteredPics.map((country, idx) => (
        <PicsDetail key={idx} {...country} />
      ))}
    </div>
  );
}

const PicsDetail = props => {
  const { id, download_url, author } = props;

  return (
    <>
 <Row style={{border:'1px solid LightGray'}}>
 <span>
    <ul style={{listStyle:'none'}}>
     <li>
       <img src={download_url} alt={name} style={{ width: "100px",marginTop:'12%'}} />
      </li>
    
</ul>
</span>
<span>
<ul style={{listStyle:'none'}}>
     <li>{id}</li>
      <li>{author}</li>
      <li><a href={download_url} className="alert-link">Downlaod</a></li>
      </ul>
      </span>
       </Row>
      
    </>
  );
};

export default SearchBar
