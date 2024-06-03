import { TableData } from "./TableData";

export interface DataTableProps {
    dataTable: TableData[];
    onActionClick: (ipcount: string) => void;
}