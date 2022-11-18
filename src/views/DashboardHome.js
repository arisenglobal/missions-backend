import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import { Steps } from 'intro.js-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ChartLargeLineCrypto from 'views/interface/plugins/chart/ChartLargeLineCrypto';
import ChartLargeLineFiat from 'views/interface/plugins/chart/ChartLargeLineFiat';
import 'intro.js/introjs.css';

const DashboardHome = () => {
  const title = 'Mission Control';
  const description = 'Missions default dashboard';

  const [tourEnabled, setTourEnabled] = useState(false);
  const tourSteps = [
    {
      element: '#introFirst',
      title: 'Latest contributions',
      intro: 'Follow total contributions for today, this week and this month.',
    },
    {
      element: '#introSecond',
      title: 'View Current Missions',
      intro: 'Here you can view current missions that are live!',
    },
    {
      element: '#introThird',
      title: 'View Current Categories',
      intro: 'View your current mission categories.',
    },
  ];
  const tourOptions = {
    nextLabel: '<span>Next</span><i class="cs-chevron-right"></i>',
    prevLabel: '<i class="cs-chevron-left"></i><span>Prev</span>',
    skipLabel: '<i class="cs-close"></i>',
    doneLabel: '<i class="cs-check"></i><span>Done</span>',
    overlayOpacity: 0.5,
    exitOnOverlayClick: true,
    exitOnEsc: true,
  };
  return (
    <>
      <HtmlHead title={title} description={description} />

      {/* Tour Start */}
      <Steps
        enabled={tourEnabled}
        steps={tourSteps}
        initialStep={0}
        options={tourOptions}
        onExit={() => {
          setTourEnabled(false);
        }}
      />
      {/* Tour End */}

      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col md="5" className="d-flex align-items-start justify-content-end">
            <Button
              variant="outline-primary"
              className="btn-icon btn-icon-start btn-icon w-100 w-md-auto ms-1"
              onClick={() => {
                setTourEnabled(true);
              }}
            >
              <CsLineIcons icon="flag" /> <span>Tour the dashboard</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row>
        <Col xl="6">
          {/* Sales & Stocks Charts Start */}
          <h2 className="small-title">Contributions</h2>
          <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
            <Card.Body>
              <Row className="g-0 h-100">
                <ChartLargeLineCrypto />
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-5 h-auto sh-xl-24">
            <Card.Body>
              <Row className="g-0 h-100">
                <ChartLargeLineFiat />
              </Row>
            </Card.Body>
          </Card>
          {/* Sales & Stocks Charts End */}

          {/* Stats Start */}
          <h2 className="small-title">Platform Stats</h2>
          <Row className="gx-2">
            <Col className="p-0">
              <Glide
                noControls
                options={{
                  gap: 0,
                  rewind: false,
                  bound: true,
                  perView: 6,
                  breakpoints: {
                    400: { perView: 1 },
                    600: { perView: 2 },
                    1400: { perView: 3 },
                    1600: { perView: 4 },
                    1900: { perView: 5 },
                    3840: { perView: 6 },
                  },
                }}
              >
                
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="navigate-diagonal" className="text-white" />
                      </div>
                      <p className="mb-0 lh-1">Missions</p>
                      <p className="cta-3 mb-0 text-primary">33</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="check-circle" className="text-white" />
                      </div>
                      <p className="mb-0 lh-1">Contributions</p>
                      <p className="cta-3 mb-0 text-primary">53,203</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="arrow-bottom-left" className="text-white" />
                      </div>
                      <p className="mb-0 lh-1">Total Income</p>
                      <p className="cta-3 mb-0 text-primary">$3,330,323.32</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="pin" className="text-white" />
                      </div>
                      <p className="mb-0 lh-1">Categories</p>
                      <p className="cta-3 mb-0 text-primary">4</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
              </Glide>
            </Col>
          </Row>
          {/* Stats End */}
        </Col>

        {/* Products Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Missions</h2>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2" id="introSecond">
            <Row className="g-0 sh-12">
              <Col xs="auto">
                <NavLink to="/pages/portfolio/detail">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                      <NavLink to="/pages/portfolio/detail">MissionName</NavLink>
                      <div className="text-small text-muted text-truncate">Mission Short Description.</div>
                    </Col>
                    <Col md="5" className="d-flex align-items-center justify-content-md-end">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Edit</span>
                      </Button>
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                        <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                        <span className="d-none d-xxl-inline-block">Delete</span>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Products End */}
      </Row>

      <Row>
        {/* Logs Start */}
        <Col lg="6" className="mb-5">
          <h2 className="small-title">Logs</h2>
          <Card className="sh-40 h-lg-100-card">
            <Card.Body className="mb-n2 scroll-out h-100">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New mission added.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Logs End */}

        {/* Categories Start */}
        <Col lg="6" className="mb-5">
          <h2 className="small-title">Categories</h2>
          <Row className="g-2">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up" id="introThird">
                <Card.Body className="text-center">
                  <NavLink to="#">
                    <p className="heading mt-3 text-body">CategoryName</p>
                    <div className="text-extra-small fw-medium text-muted">CategoryShortDescription</div>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Categories End */}
      </Row>

      
    </>
  );
};

export default DashboardHome;
