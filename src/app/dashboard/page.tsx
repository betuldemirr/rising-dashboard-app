"use client";

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { getTable, getInfo } from '../services/api';
import DataInfo from '../components/DataInfo';
import TransactionsHistoryTable from '../components/TransactionsHistoryTable';
import ChartComponent from '../components/DataUsageGraphic';
import { InfoData } from '../models/InfoData';
import { TableData } from '../models/TableData';

const Dashboard: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [tableData, setTableData] = useState<TableData[]>([]);
    const [infoData, setInfoData] = useState<InfoData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tableResponse = await getTable();
                const infoResponse = await getInfo();
                setTableData(tableResponse.data);
                setInfoData(infoResponse);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occurred");
                }
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onActionClick = (ipcount: string) => {
        console.log(ipcount);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    {loading ? (
                        <Alert variant="info">Loading...</Alert>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <>
                            {infoData && <DataInfo infoData={infoData} />}
                            <ChartComponent />
                            <TransactionsHistoryTable dataTable={tableData} onActionClick={onActionClick} />
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;