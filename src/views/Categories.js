import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';
import { MENU_PLACEMENT, LAYOUT } from 'constants.js';
import 'react-datepicker/dist/react-datepicker.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Categories = () => {
  const title = 'All Categories';
  const description = 'Below is a full list of all mission categories that have been added.';

  const breadcrumbs = [{ to: '', text: 'Home' }];

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
            <Card>
      <Card.Body className="mb-n3 border-last-none">
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Category Name</div>
                  <div className="text-small text-muted">Category Short Description</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit Category
                  </Button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Category Name</div>
                  <div className="text-small text-muted">Category Short Description</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit Category
                  </Button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Category Name</div>
                  <div className="text-small text-muted">Category Short Description</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit Category
                  </Button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
            </Card>
          </section>
          {/* Title End */}
        </Col>
      </Row>
    </>
  );
};

export default Categories;
