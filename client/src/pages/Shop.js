import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { Context } from "..";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import { fetchTypes, fetchDevices } from "../http/deviceApi";
import { observer } from "mobx-react-lite";
const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchDevices().then((data) => {
      return device.setDevices([...data]);
    });
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
