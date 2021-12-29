import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';


const columns = [
  { id: 'name', label: 'Client’s Name', minWidth: 70 },
  { id: 'phone', label: 'Phone Number', minWidth: 70 },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 70,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'payback',
    label: 'Payback',
    minWidth: 50,
    align: 'right',
    },
    {
        id: 'due_date',
        label: 'Due date',
        minWidth: 70,
        align: 'right',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 70,
        align: 'right',
      },
];

function createData(name, phone, amount, date, payback, due_date, status) {
  return { name, phone, amount, date, payback, due_date, status };
}

const token = localStorage.getItem('token')
let rows= [
    createData(),
];
  setTimeout(() => {
      axios.get('http://adminservice-env.eba-ubpbf6se.us-east-2.elasticbeanstalk.com/index.php/api/v1/list_transactions', {
    headers: {
        "Authorization" : `Bearer ${token}`
    }
}).then(res => {
    console.log(res?.data?.data, 'from loannnnnnnn')
    res?.data?.data.map((row,i) => (
        rows[i] = createData(`${row?.user?.email}`, `${row?.user?.phone_no}`, `${row?.amount}`, new Date().toISOString().slice(0, 10), '', '', `${row?.status}`)
    ))
})
  }, 3000);




export default function Transaction() {
  const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <div className="dashboard_wrapper">
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column,i) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={i} align={column.align}>
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
            </div>
  );
}



///list_transactions