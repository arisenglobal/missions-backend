import React, { useState } from 'react';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';
import { MENU_PLACEMENT, LAYOUT } from 'constants.js';
import {hyperdriveAddress} from 'hyperConstants.js'

import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const AddMission = () => {
  const title = 'Add Mission';
  const description = 'Fill out the form below to create a mission';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  const categoryOptions = [
    { value: 'Water', label: 'Water' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Health & Wellness', label: 'Health & Wellness' },
    { value: 'Freedom', label: 'Freedom' },
  ];

  const [categoryValue, setCategoryValue] = useState();

  useCustomLayout({ placement: MENU_PLACEMENT.Vertical, layout: LAYOUT.Fluid });
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              {/* Public Info Start */}
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Name</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="dMessenger - Creating safe communications for Christians" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Short Description</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="Short description here, must be less than 160 characters." />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Permalink</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. water" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Goal</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. $10,000.00  << Must match this format" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission BTC Address</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. bc1qar..." />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission ETH Address</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. 0x..." />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission DOGE Address</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. DFab..." />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Category</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Select classNamePrefix="react-select" options={categoryOptions} value={categoryValue} onChange={setCategoryValue} placeholder="" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Image</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>This image into the Hyperdrive {hyperdriveAddress}</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Mission Full Description</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control as="textarea" rows={3} defaultValue="Full mission description here." />
                  </Col>
                </Row>
                
                <Row className="mt-5">
                  <Col lg="2" md="3" sm="4" />
                  <Col sm="8" md="9" lg="10">
                    <Button variant="outline-primary" className="mb-1">
                      Add Mission
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Public Info End */}

            </Card>
          </section>
          {/* Title End */}
        </Col>
      </Row>
    </>
  );
};

export default AddMission;
