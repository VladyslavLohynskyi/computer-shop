import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE, HTTP_ADDRESS } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }}>
        <div style={{ width: "100%", height: "250px" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={HTTP_ADDRESS + device.img}
          />
        </div>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>RazerX</div>
          <div className="d-flex align-items-center">{device.price}$</div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
