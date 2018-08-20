import React from 'react';
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './comicdetailstab.scss'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  extractId = (url) => {
    const index = url.lastIndexOf('/') + 1;
    return url.slice(index, url.length)
  }
  render() {
    return (
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Characters ({this.props.comic.characters.available})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Creators ({this.props.comic.creators.items.length})
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className='comic-details-tab'>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" md='12'>
                <Row>
                  {this.props.comic.characters.items.map(e =>

                    <Col sm='6' md='4'>
                      <Link to={`/characters/${this.extractId(e.resourceURI)}`}>
                        <h6 className='comic-details-tab__item'>{e.name}</h6>
                      </Link>
                    </Col>

                  )}
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {this.props.comic.creators.items.map(e =>
                <React.Fragment>
                  <Col sm='12' md='12'>
                    <h6 className='comic-details-tab__item'>{e.name} - {e.role}</h6>
                  </Col>
                </React.Fragment>
              )}
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}