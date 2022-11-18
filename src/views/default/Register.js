import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const Register = () => {
  const title = 'New Platform';
  const description = 'Create a new missions platform.';

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Platform name is required'),
  });
  const initialValues = { name: '', email: '', password: '', terms: false };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">Manage multiple mission platforms, from the same dashboard, easily.</h1>
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
            This will create a new Hyperbee and a new Hyperdrive that is associated with a specific platform name, defined to the right. It will then announce both the Hyperbee and Hyperdrive on the Hyper network and will save them locally in a noSQL database.
          </p>
          <div className="mb-5">
            <Button size="lg" variant="outline-white" href="https://docs.dw3b.network">
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
          <h2 className="cta-1 mb-0 text-primary">Let's create a new mission platform.</h2>
        </div>
        <div className="mb-5">
          <p className="h6">
          If you already have an missions platform you want to use, click <NavLink to="/choosePlatform">here</NavLink>.
          </p>
        </div>
        <div>
          <form id="registerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="user" />
              <Form.Control type="text" name="name" placeholder="Platform Name" value={values.name} onChange={handleChange} />
              {errors.name && touched.name && <div className="d-block invalid-tooltip">{errors.name}</div>}
            </div>
            
            <Button size="lg" type="submit">
              Create Platform
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

export default Register;
