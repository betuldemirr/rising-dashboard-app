import React from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { TableData } from '../models/TableData';

export interface DataTableProps {
    dataTable: TableData[];
    onActionClick: (ipcount: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ dataTable, onActionClick }) => {
    return (
        <Table hover>
            <thead>
                <tr>
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
                            <DropdownButton id={`dropdown-${index}`} title="Actions">
                                <Dropdown.Item onClick={() => onActionClick(item.ipcount)}>Action 1</Dropdown.Item>
                                <Dropdown.Item onClick={() => onActionClick(item.ipcount)}>Action 2</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;