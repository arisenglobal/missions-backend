import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, Dropdown, SplitButton } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const ChoosePlatform = () => {
  const title = 'Choose Platform';
  const description = 'Create or choose a currently functional distributed platform.';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Database name is required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
  });
  const initialValues = { email: '', password: '' };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">Manage Arisen Missions</h1>
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
            Arisen's missions website is completely distributed. That means, there are no central servers. This entire dashboard is managed locally and distributes saved changes out across the people-powered web.
          </p>
          <div className="mb-5">
            <Button size="lg" variant="outline-white" href="https://freeourweb.org">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Please Choose A Platform</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Below are installations that you have already created. Click one to manage it.</p>
          <p className="h6">
            If you would like to create a new installation, click <NavLink to="/newPlatform">here</NavLink>.
          </p>
          <SplitButton
              key="chooseInstallation"
              id="chooseInstallation"
              variant="primary"
              title="Choose installation"
            >
              <Dropdown.Item eventKey="1">installation1</Dropdown.Item>
              <Dropdown.Item eventKey="2">installation2</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                installation3
              </Dropdown.Item>
            </SplitButton>
        </div>
        <div>
          <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            
            
            <Button size="lg" type="submit">
              Manage
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default ChoosePlatform;
