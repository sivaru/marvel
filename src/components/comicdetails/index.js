import React from 'react'
import { Row, Col, Container } from 'reactstrap'


import './comicdetails.scss'
import ComicDetailsTab from '../comicdetailstab/'


class ComicsDetails extends React.Component {
  render() {
    console.log(this.props.comic)
    return (
      <Container className='comic-details'>
        <Row>
          <Col md='4'>
            <div className='d-flex justify-content-center'>
              <img className='comic-details__image' src={`${this.props.comic.thumbnail.path}.${this.props.comic.thumbnail.extension}`} alt={this.props.comic.name} />
            </div>
          </Col>

          <Col md='8'>
            <Row>
              <div className='d-flex justify-content-center'>
                <h1>{this.props.comic.title}</h1>
              </div>
            </Row>

            <Row>
              <div className='d-flex justify-content-center'>
                <p>{this.props.comic.description ? this.props.comic.description : 'There\'s no description available for this comic.'}</p>
              </div>
            </Row>
            <Row>
            <ComicDetailsTab comic={this.props.comic}/>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default ComicsDetails;