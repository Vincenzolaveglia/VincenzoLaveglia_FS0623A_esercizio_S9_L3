import React, { Component } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';

class BookList extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  render() {
    const { books } = this.props;
    const { searchQuery } = this.state;

    const filteredBooks = books.filter((b) =>
      b.title.toLowerCase().includes(searchQuery)
    );

    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                className='mb-3'
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {filteredBooks.map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook book={b} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
