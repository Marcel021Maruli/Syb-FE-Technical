import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import useNavbar from "./navbar.hook";

import Input from "modules/components/input";

import { useLocation } from "react-router-dom";
import AnilistLogo from "assets/images/anilist-logo.png";
import { Row, Col } from "antd";

import "./navbar.css";

const Navbar = memo(() => {
  const { handleChange } = useNavbar();
  const location = useLocation();

  return (
    <>
      <div className='Navbar'>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          className='Navbar-ul'>
          <Col md={2} sm={4} xs={4}>
            <NavLink className='Navbar-link--inactive' to='/anilist-list'>
              <img
                alt='Anilist Logo'
                src={AnilistLogo}
                className='Navbar-logo'
              />
            </NavLink>
          </Col>
          {!location.pathname.includes("/anilist-detail") && (
            <Col md={8} sm={16} xs={16}>
              <Input
                className='Search'
                placeholder='Search Title..'
                name='search'
                onChange={handleChange}
              />
            </Col>
          )}
        </Row>
      </div>
    </>
  );
});

export default Navbar;
