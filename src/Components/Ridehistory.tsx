import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Ride } from '../Data/Ride';

interface Column {
  id: 'name' | 'code' | 'pickup'|'destination' | 'size' |'status';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'pickup', label: 'pickup', minWidth: 100 },
  { id: 'destination', label: 'destination', minWidth: 100 },
 
  
  { id: 'size', label: 'size', minWidth: 100 }, 
  { id: 'status', label: 'status', minWidth: 100 },
];

interface Data {
  name: string;
  code: string;
  pickup:string
  destination:string,
  size: number;
  
  status:string,
}

function createData(
  name: string,
  code: string,
  pickup:string,
  destination:string,
  size: number,
  status:string,
): Data {
 
  return { name, code,pickup,destination, size,status };
}

const rows = [

  createData('Taimoor', 'dhook kashmiran', "air university", "2 KM",555,'complete'),
  createData('Saad ', 'F-9 markaz', "islamabad", "3 KM",55,'complete'),
  
  createData('Taimoor', 'bluw area', "air university", "2 KM",555,'complete'),
  createData('Saad ', 'Maviya akram', "islamabad", "3 KM",55,'complete'),
  
  createData('Taimoor', 'Farooq azam chowk', "air university", "2 KM",555,'complete'),
  createData('Saad ', 'Maviya akram', "islamabad", "3 KM",55,'cancel'),
  
  createData('Taimoor', 'Amir', "air university", "2 KM",555,'complete'),
  createData('Saad ', 'Maviya akram', "islamabad", "3 KM",55,'complete'),
  
  createData('Taimoor', 'Amir', "air university", "2 KM",555,'complete'),
  createData('Saad ', 'Maviya akram', "islamabad", "3 KM",55,'complete'),
  

];

export default function Ridehistory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[ride,setride]=React.useState(Ride)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell>
            <p className="font-bold">Travel with</p>
            </TableCell>
            <TableCell>
            <p className="font-bold">Destination</p>
            </TableCell>
            <TableCell>
            <p className="font-bold">Pickup point</p>
            </TableCell>
            <TableCell>
            <p className="font-bold">Distance</p>
            </TableCell>
            <TableCell>
            <p className="font-bold">Fare</p>
            </TableCell>
            <TableCell>
            <p className="font-bold">Status</p>
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
