import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ContactBodyResponse } from "./hooks/services/contact/type";
import { ContactForm } from "./contact.form";

function App({
  rows,
  handleDelete,
  isLoading,
  handleOpenModal,
  closeModal,
  isModalOpen,
  selectedContact,
}: {
  rows: ContactBodyResponse[];
  handleDelete: (id: string) => void;
  isLoading: boolean;
  handleOpenModal: (contact?: ContactBodyResponse) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  selectedContact?: ContactBodyResponse;
}) {
  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Paper
          sx={{
            position: "absolute" as "absolute",
            top: "calc(20% - 150px)",
            left: "calc(50% - 300px)",
            paddingTop: 2,
          }}
        >
          <ContactForm contact={selectedContact} closeModal={closeModal} />
        </Paper>
      </Modal>
      <Grid
        container
        justifyContent="center"
        alignItems="left"
        flexDirection={"column"}
        sx={{ width: "100%" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
        >
          <Button
            startIcon={<AddBoxIcon />}
            variant="contained"
            color="primary"
            sx={{ marginBottom: 5 }}
            onClick={() => {
              handleOpenModal();
            }}
          >
            New contact
          </Button>
          <Paper sx={{ width: "50%", marginBottom: 5 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      Name
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      Phone
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      Email
                    </TableCell>
                    <TableCell align="center" colSpan={3}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isLoading && (
                    <TableCell align="center" colSpan={11}>
                      <Box>
                        <CircularProgress />
                      </Box>
                    </TableCell>
                  )}

                  {!isLoading &&
                    rows.length > 0 &&
                    rows.map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="center" colSpan={2}>
                            {row.name}
                          </TableCell>
                          <TableCell align="center" colSpan={3}>
                            {row.phone}
                          </TableCell>
                          <TableCell align="center" colSpan={3}>
                            {row.email}
                          </TableCell>
                          <TableCell align="center" colSpan={1}>
                            <IconButton
                              onClick={() => {
                                handleOpenModal(row);
                              }}
                            >
                              <CreateIcon />
                            </IconButton>

                            <IconButton
                              onClick={() => {
                                handleDelete(row.id);
                              }}
                              aria-label={`delete ${row.name}`}
                            >
                              <DeleteForeverIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
