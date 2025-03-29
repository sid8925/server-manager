// @mui material components
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormLabel,
} from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import serverTable from "layouts/serverList/serverTable";

import MDButton from "components/MDButton";

function Tables() {
  const { columns, rows } = serverTable();

  const [onAddServerOpen, setOnAddServerOpen] = useState(false);
  const [onEditServerOpen, setOnEditServerOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);

  const handleOpen = () => {
    setOnAddServerOpen(true);
  };

  const handleClose = () => {
    setOnAddServerOpen(false);
  };

  const handleAddServer = () => {
    handleOpen();
  };

  const handleEditServerOpen = (Server) => {
    setSelectedServer(Server);
    setOnEditServerOpen(true);
    console.log("data", Server);
  };

  const handleEditServerClose = () => {
    setOnEditServerOpen(false);
    setSelectedServer(null);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox
        mt={4}
        pt={0}
        pb={0}
        width="12rem"
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <MDButton
          variant="outlined"
          size="medium"
          color="white"
          fullWidth
          style={{ fontSize: "18px", textTransform: "none" }}
          onClick={handleAddServer}
        >
          <AddCircleIcon sx={{ width: 20, height: 20 }} /> &nbsp; Add Server
        </MDButton>
      </MDBox>
      <MDBox pt={0} pb={3}>
        <MDBox pt={0} pb={6} sx={{ width: "50%" }}></MDBox>
        <Card>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Server List
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <DataTable
              table={{
                columns,
                rows: rows.map((row) => ({
                  ...row,
                  actionComponent: (
                    <MDButton variant="text" color="dark" onClick={() => handleEditServerOpen(row)}>
                      Edit
                    </MDButton>
                  ),
                })),
              }}
              isSorted={true}
              entriesPerPage={true}
              showTotalEntries={true}
              noEndBorder
            />
          </MDBox>
        </Card>
      </MDBox>
      <Dialog open={onAddServerOpen} fullWidth keepMounted onClose={handleClose}>
        <DialogTitle>Add Server</DialogTitle>
        <DialogContent>
          <MDBox
            variant="gradient"
            sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}
          >
            <TextField variant="filled" label="Author Name" fullWidth />
            <TextField variant="filled" label="Title" fullWidth />
            <TextField variant="filled" label="Description" fullWidth />
            <TextField variant="filled" label="Employed" fullWidth />
            <TextField variant="filled" label="Status" fullWidth />
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={onEditServerOpen} fullWidth keepMounted onClose={handleEditServerClose}>
        <DialogTitle>Edit Server</DialogTitle>
        <DialogContent>
          <MDBox sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Author</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedServer?.author}
                defaultValue={selectedServer?.author}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </div>

            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Title</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedServer?.functionComponent?.props?.title}
                defaultValue={selectedServer?.functionComponent?.props?.title}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Description</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedServer?.functionComponent?.props?.description}
                defaultValue={selectedServer?.functionComponent?.props?.description}
              />
            </div>

            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Employed</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedServer?.employed}
                defaultValue={selectedServer?.employed}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Status</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedServer?.status}
                defaultValue={selectedServer?.status}
              />
            </div>
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditServerClose}>Cancel</Button>
          <Button onClick={handleEditServerClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Tables;
