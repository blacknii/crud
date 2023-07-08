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
} from "@mui/material";

const DUMMY_DATA = {
  "-NZkqrFwF2Fxa7Gn10GB": { count: "725", name: "Google" },
  "-NZkr28GUL5lpft2uOcX": { count: "225", name: "Facebook" },
  "-NZkr54Oo6LvOMlviL5H": { count: "15", name: "Instagram" },
  "-NZkumvK0uwreJhCGGTB": { count: "30", name: "Twitter" },
  "-NZkurMjazqOcTZVEGqz": { count: "45", name: "LinkedIn" },
};

const transformedArray = Object.entries(DUMMY_DATA).map(([key, value]) => {
  return {
    key,
    count: value.count,
    name: value.name,
  };
});

console.log(transformedArray);

function App() {
  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Customer Acquisition Channel CRUD
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <Typography variant="h4" component="h2">
            Users
          </Typography>
          <Button variant="contained" color="success">
            Add new
          </Button>
        </Stack>
        <TableContainer sx={{ maxHeight: "405px" }} component={Paper}>
          <Table stickyHeader aria-label="channels table">
            <TableHead>
              <TableRow>
                <TableCell>Channel</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transformedArray.map((row) => (
                <TableRow key={row.key}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell sx={{ width: "0" }}>
                    <Stack spacing={1} direction="row">
                      <Button variant="contained">Edit</Button>
                      <Button variant="contained" color="error">
                        Detete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export default App;
