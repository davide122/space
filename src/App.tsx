import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCard from './component/SingleCard';

import MyNav from './component/MyNav';
import { Row } from 'react-bootstrap';
function App() {
  return (
    <div>
   
 <MyNav></MyNav>
 <Row>
   <SingleCard></SingleCard>
 </Row>

</div>
  );
}

export default App;
