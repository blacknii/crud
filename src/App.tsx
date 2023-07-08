import "./App.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Stack,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ArcElement } from "chart.js";
ChartJS.register(ArcElement);

const DUMMY_DATA = {
  "-NZkqrFwF2Fxa7Gn10GB": { count: "725", name: "Google" },
  "-NZkr28GUL5lpft2uOcX": { count: "225", name: "Facebook" },
  "-NZkr54Oo6LvOMlviL5H": { count: "15", name: "Instagram" },
  "-NZkumvK0uwreJhCGGTB": { count: "30", name: "Twitter" },
  "-NZkurMjazqOcTZVEGqz": { count: "45", name: "LinkedIn" },
  "-NZkr54Oo6LvOMaaslviL5H": { count: "15", name: "Instagram" },
  "-NZkumvK0uwraseJhCGGTB": { count: "30", name: "Twitter" },
  "-NZkurMjazqasOcTZVEGqz": { count: "45", name: "LinkedIn" },
};

const transformedArray = Object.entries(DUMMY_DATA).map(([key, value]) => {
  return {
    key,
    count: value.count,
    name: value.name,
  };
});

function App() {
  const [userData, setUserData] = useState({
    labels: transformedArray.map((e) => e.name),
    datasets: [
      {
        label: "Users Gained",
        data: transformedArray.map((e) => e.count),
        backgroundColor: [
          "#6096B4",
          "#93BFCF",
          "#F4B183",
          "#8294C4",
          "#ACB1D6",
          "#FFD966",
          "#BDCDD6",
          "#EEE9DA",
          "#DFA67B",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addNewModalOpen, setAddNewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [elementId, setElementId] = useState("");

  const handleClickDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleClickAddNewModalOpen = () => {
    setAddNewModalOpen(true);
  };

  const handleAddNewModalClose = () => {
    setAddNewModalOpen(false);
  };

  const handleClickEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <Dialog open={deleteModalOpen} onClose={handleDeleteModalClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this element?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteModalClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteModalClose}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={addNewModalOpen} onClose={handleAddNewModalClose}>
        <DialogTitle>Add New</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleAddNewModalClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleAddNewModalClose}
            variant="contained"
            color="success"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={editModalOpen} onClose={handleEditModalClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditModalClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleEditModalClose} variant="contained">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      <Stack spacing={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Customer Acquisition Channel CRUD
        </Typography>
        <Stack
          spacing={4}
          direction="row"
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <Stack spacing={1} sx={{ width: "600px" }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="h4" component="h2">
                Table
              </Typography>
              <Button
                onClick={handleClickAddNewModalOpen}
                variant="contained"
                color="success"
              >
                Add new
              </Button>
            </Stack>
            <TableContainer sx={{ maxHeight: "405px" }} component={Paper}>
              <Table stickyHeader aria-label="channels table">
                <TableHead>
                  <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transformedArray.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.count}</TableCell>
                      <TableCell align="center" sx={{ width: "0" }}>
                        <Stack spacing={1} direction="row">
                          <Button
                            onClick={handleClickEditModalOpen}
                            variant="contained"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={handleClickDeleteModalOpen}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
          <Stack sx={{ width: "400px", alignItems: "center", padding: "20px" }}>
            {true && <Pie data={userData} />}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
