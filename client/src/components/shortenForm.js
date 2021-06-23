import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { shorten } from '../services/url';

const SERVER_ENDPOINT = process.env.NODE_ENV === 'production' ? "https://govtech-url-shortener-app.herokuapp.com" : "http://localhost:5000";

const ShortenForm = () => {
  const [link, setLink] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const url = form.elements.url.value;
    try {
      const response = await shorten(url);
      if (response.data) {
        console.log(response.data);
        setLink(response.data.short);
        setCode(response.data.urlCode);
        setError('');
      }
    } catch (e) {
      console.log(e.response);
      setError(e.response?.data);
      setLink('');
    }
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col md="8">
          <h1 class="font-weight-bold deep-orange-text mb-3">Shorten URL Service</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <Form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <Form.Control
              required
              type="text"
              id="url"
              placeholder="Input your link here"
              style={{ marginBottom: 5 }} />
            <Button type="submit">Shorten URL</Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md="6">
        {link &&
          <div class="text-center text-info">
            <a href={`${SERVER_ENDPOINT}/${code}`} rel="noreferrer" target="_blank">
              {SERVER_ENDPOINT}/{code}
            </a>
          </div>
        }
        {error &&
          <p class="text-center text-danger">{error}</p>
        }
        </Col>  
      </Row>
    </>
  )
};

export default ShortenForm;