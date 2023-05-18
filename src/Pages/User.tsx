import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import p2 from '../assets/image-gallery.png'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableHead,
} from "@mui/material";
import { Delete, Edit, RemoveRedEye, Search, SearchRounded } from "@mui/icons-material";
import { userdata } from "../Data/Userdata";
import {Userprofile} from "../Components/Userprofile";
import Edituserprofile from "./Edituserprofile";
import Deleteuserprofile from "./Deleteuserprofile";
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}


export default function User() {
  const [data, setdata] = React.useState(userdata);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [gender, setgender] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const[userprofile,setuserprofule]=React.useState({})
  const[dialog,setdialog]=React.useState('')
  const handleClickOpen = (profile:any,d:any) => {
    console.log(profile)
    setuserprofule(profile)  
    setdialog(d)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlegander = (event: any) => {
    const filter = userdata.filter((x: any) => {
      return x.gender == event.target.value;
    });
    setdata(filter);

    console.log(event.target.value);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [counter, setcounter] = React.useState(1);
  return (
    <div className=" p-5">
      <div className="flex mb-5">
        <div className="w-[50%]">
          <Box sx={{ maxWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(event: any) => handlegander(event)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="flex justify-end w-[50%]">
          <div className="ml-3 flex">
            <input
              type="text"
              className="p-4 rounded-sm  border-[1px] border-bordercolor"
              placeholder="Search driver"
            />
            <div className="bg-primary rounded-tr-sm rounded-br-sm min-w-[50px] flex justify-center items-center ">
              <SearchRounded className="!text-white" />
            </div>
          </div>
          
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="font-bold">User iD</p>
              </TableCell>
              <TableCell>
                
                <p className="font-bold">Image</p>
              </TableCell>
              <TableCell>
                
                <p className="font-bold">Name</p>
              </TableCell>
              <TableCell>
                <p className="font-bold">Gender</p>
              </TableCell>
              <TableCell>
                <p className="font-bold">Phone</p>
              </TableCell>
              <TableCell>
                <p className="font-bold">Created at</p>
              </TableCell>
              <TableCell align="center">
                <p className="font-bold">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row: any, index) => (
              <TableRow key={index}>
                <TableCell sx={{ paddingLeft: "20px" }}>{counter}</TableCell>
                <TableCell>
                  {
                    row.image!=null?
                  
                  <div className="w-14 rounded-md">
                    <img src={row.image} className='rounded-full' alt="" />
                  </div>
                     :
                     <div className="w-14 h-14 rounded-md bg-secondry flex justify-center items-center">
                      <img src={p2} className='w-10' alt="" />
                     </div>
                  }
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell style={{ width: 110 }}>
                  <div className="flex ">
                    <IconButton  onClick={()=>{
                      handleClickOpen(row,'view')
                      
                    }}>
                      <RemoveRedEye className="text-primary" />
                    </IconButton>
                    <IconButton onClick={()=>{
                      handleClickOpen(row,'edit')
                      
                    }}>
                      <Edit className="text-green" />
                    </IconButton>
                    <IconButton onClick={()=>{
                      handleClickOpen(row,'delete')
                      
                    }}>
                      <Delete className="text-danger" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        fullWidth
        maxWidth={dialog == 'view' ? 'lg' : 'sm'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       {
        dialog=='view'?
      

        <Userprofile func={handleClose} data={userprofile} />
      
        :dialog=='edit'?
        <Edituserprofile/>
        :
        <Deleteuserprofile/>
     }       
       
      </Dialog>
    </div>
  );
}
