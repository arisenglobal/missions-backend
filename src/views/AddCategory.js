import React, { useState } from 'react';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';
import { MENU_PLACEMENT, LAYOUT } from 'constants.js';

import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const AddCategory = () => {
  const title = 'Add Category';
  const description = 'Fill out the form below to create a mission';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  const colorOptions = [
    { value: 'Red', label: 'Red' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
    { value: 'Yellow', label: 'Yellow' },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [colorValue, setColorValue] = useState();

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
                    <Form.Label className="col-form-label">Category Name</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="Water" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Category Short Description</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="Short description here, must be less than 160 characters." />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Category Permalink</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="ex. water" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Category Color</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Select classNamePrefix="react-select" options={colorOptions} value={colorValue} onChange={setColorValue} placeholder="" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Category Full Description</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control as="textarea" rows={3} defaultValue="Full category description here." />
                  </Col>
                </Row>
                
                <Row className="mt-5">
                  <Col lg="2" md="3" sm="4" />
                  <Col sm="8" md="9" lg="10">
                    <Button variant="outline-primary" className="mb-1">
                      Add Mission Category
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

export default AddCategory;
