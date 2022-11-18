import React from 'react';
import { Dropdown } from 'react-bootstrap';

const NavPlatformSwitcher = () => {
  return (
    <>
      
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="danger">
          Arisen
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Arisen
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Other platform 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Other platform 3</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Other platform 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default React.memo(NavPlatformSwitcher);
