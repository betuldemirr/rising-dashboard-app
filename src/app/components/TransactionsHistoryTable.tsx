import React from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { DataTableProps } from '../models/DataTableProps';

const TransactionsHistoryTable: React.FC<DataTableProps> = ({ dataTable, onActionClick }) => {
    return (
        <div className='component'>
            <h3 className='mb-3'>Transactions History</h3>
            <Table hover >
                <thead>
                    <tr className='table-title'>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Rental Period</th>
                        <th>Number of IP</th>
                        <th>Specific Purpose</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((item, index) => (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.location}</td>
                            <td>{item.rental}</td>
                            <td>{item.ipcount}</td>
                            <td>{item.purpose}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>
                                <DropdownButton id={`dropdown-${index}`} title="Actions" variant="white">
                                    <Dropdown.Item onClick={() => onActionClick(item.ipcount)}>Processing</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onActionClick(item.ipcount)}>In Progress</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onActionClick(item.ipcount)}>Completed</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TransactionsHistoryTable;