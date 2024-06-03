import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DataInfoProps } from '../models/DataInfoProps';

const DataInfo: React.FC<DataInfoProps> = ({ infoData }) => {

    const formatDataUsage = (dataUsageInMB: string): string => {
        const dataInGB: number = parseFloat(dataUsageInMB) / 1000;
        return dataInGB.toFixed(3) + ' GB';
    };

    return (
        <>
            <Row>
                <Col>
                    <div className='data-info-box box-1'>
                        <span className='title'>Subscription expires on:</span>
                        <span className='info'>{infoData.expireTime}</span>
                    </div>
                </Col>
                <Col>
                    <div className='data-info-box box-2'>
                        <span className='title'>Last Charge:</span>
                        <span className='info'><span>{infoData.lastChargeAmount}</span> {infoData.lastCharge}</span>
                    </div>
                </Col>
                <Col>
                    <div className='data-info-box box-3'>
                        <span className='title'>Total Data Usage:</span>
                        <span className='info'>{formatDataUsage(infoData.totalDataUsage)}</span>
                    </div>
                </Col>
                <Col>
                    <div className='data-info-box box-4'>
                        <span className='title'>Daily Usage:</span>
                        <span className='info'>{formatDataUsage(infoData.dailyUsage)}</span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default DataInfo;