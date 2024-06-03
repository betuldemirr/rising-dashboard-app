import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { InfoData } from '../models/InfoData';

interface DataInfoProps {
    infoData: InfoData;
}

const DataInfo: React.FC<DataInfoProps> = ({ infoData }) => {
    return (
        <Row>
            <Col><strong>Expire Time:</strong> {infoData.expireTime}</Col>
            <Col><strong>Last Charge:</strong> {infoData.lastCharge}</Col>
            <Col><strong>Total Data Usage:</strong> {infoData.totalDataUsage}</Col>
            <Col><strong>Daily Usage:</strong> {infoData.dailyUsage}</Col>
        </Row>
    );
};

export default DataInfo;
