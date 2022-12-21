import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
    };
  }

  render() {
    let {country} = this.state;

    const getCountry = (event) => {
      country = event.target.value
    }

    const onTrigger = (event) => {
      this.props.getCountryValue(country);
      event.preventDefault();
    }
    return (
      <div className="ComboBox">
        <Container className="ComboBox-container">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Container>
                  <Row>
                    <Col xs={6}>
                      <Form.Label>Choose country to see users</Form.Label>
                    </Col>
                    <Col>
                      <Form.Select name="country" id="country" onChange={getCountry}>
                        <option value="">All Country</option>
                        {
                          this.props.countryList.map((country) => (
                            <option value={country} key={country}>{country}</option>
                          ))
                        }
                      </Form.Select>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Button onClick={onTrigger}>Get Users</Button>
            </Col>
          </Row>
        </Container>
        <p>Number of users: {this.props.userNumber}</p>
      </div>

    )
  }
}

export default ComboBox

