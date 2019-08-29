import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import uniqid from 'uniqid';

const Main = ({ data, value }) => {
  const totalResults = data.totalResults;
  const stringResults = `You serched for: ${value}, ${totalResults} results found`;

  const searchData = data.Search;

  const renderElement = Object.values(searchData).map((item, index) => (
    <>
      {(index === 0 || index === 5) && (
        <Col key={uniqid()} xs={1}></Col>
      )}
      <Col
        key={uniqid()}
        xl={2}
        className='image-block'
      >
        <Image src={item.Poster} className='image' rounded fluid />
        <h5 className='title'>{item.Title}</h5>
        <p className='text'>{item.Year}</p>
        <p className='text'>{item.imdbID}</p>
        <p className='text'>{item.Type}</p>
      </Col>
      {(index === 4 || index === 9) && (
        <Col key={uniqid()} xs={1}></Col>
      )}
    </>
  ));

  return (
    <Container>
      <Row>
        <Col>
          <h3>{stringResults}</h3>
        </Col>
      </Row>
      <Row>
        {renderElement}
      </Row>
    </Container>
  );
}

export default Main;
