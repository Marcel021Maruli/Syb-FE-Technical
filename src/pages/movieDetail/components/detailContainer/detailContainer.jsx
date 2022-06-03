import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Row } from "antd";

const DetailContainer = ({ src, title, id, description }) => {
  return (
    <>
      <div className='DetailContainer u-container'>
        <Row>
          <Col md={24}>
            <div class='header'>
              <h1>{title}</h1>
            </div>
          </Col>
          <Col md={6} sm={24} lg={6} xl={6}>
            <img src={src} alt={`${title} - ${id}`} />
          </Col>

          <Col md={12} sm={24} lg={12} xl={12}>
            <h1>Description</h1>
            {description}
          </Col>
        </Row>

        <div class='footer'>
          <Button>
            <NavLink to={`/anilist-list/`}>Back</NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailContainer;
