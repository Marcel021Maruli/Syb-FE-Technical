import React, { memo } from "react";
import { Card, Avatar } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const CardComponent = memo(
  ({ img, alt, width = 300, avatar, title, description, id }) => (
    <Card
      style={{
        width: width,
      }}
      cover={<img alt={alt} src={img} />}
      actions={[
        <NavLink className='Navbar-link--inactive' to={`/anilist-detail/${id}`}>
          <div className='detail-button'>
            <span>Click to see detail...</span>
          </div>
        </NavLink>,
      ]}>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={description}
      />
    </Card>
  )
);

export default CardComponent;
