// @mui material components
import React from "react";
import Card from "@mui/material/Card";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormLabel,
} from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DataTable from "examples/Tables/DataTable";
import NewUserDataTable from "examples/Tables/NewUserDataTable";

// Data
// import dataTable from "layouts/domain/dataTable";
import newUserDataTable from "layouts/NewUserList/newUserDataTable";
import MDButton from "components/MDButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Tables() {
  const { columns, rows } = newUserDataTable();
  const navigate = useNavigate();

  const [onAddDomainOpen, setOnAddDomainOpen] = useState(false);
  const [onEditDomainOpen, setOnEditDomainOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleOpen = () => {
    setOnAddDomainOpen(true);
  };

  const handleClose = () => {
    setOnAddDomainOpen(false);
  };

  const handleAddDomain = () => {
    handleOpen();
  };

  const handleEditDomainOpen = (domain) => {
    setSelectedDomain(domain);
    setOnEditDomainOpen(true);
    console.log("data", domain);
  };

  const handleEditDomainClose = () => {
    setOnEditDomainOpen(false);
    setSelectedDomain(null);
  };

  // console.log("rows", rows);

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
          onClick={() => {
            navigate("/add-users");
          }}
        >
          <AddCircleIcon sx={{ width: 20, height: 20 }} /> &nbsp; Add Users
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
              Users List
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <NewUserDataTable
              table={{
                columns,
                rows: rows.map((row) => ({
                  ...row,
                  actionComponent: (
                    <MDButton variant="text" color="dark" onClick={() => handleEditDomainOpen(row)}>
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

      <Dialog open={onEditDomainOpen} fullWidth keepMounted onClose={handleEditDomainClose}>
        <DialogTitle>Edit Domain</DialogTitle>
        <DialogContent>
          <MDBox sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Author</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedDomain?.author}
                defaultValue={selectedDomain?.author}
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
                value={selectedDomain?.functionComponent?.props?.title}
                defaultValue={selectedDomain?.functionComponent?.props?.title}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Description</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedDomain?.functionComponent?.props?.description}
                defaultValue={selectedDomain?.functionComponent?.props?.description}
              />
            </div>

            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Employed</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedDomain?.employed}
                defaultValue={selectedDomain?.employed}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Status</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedDomain?.status}
                defaultValue={selectedDomain?.status}
              />
            </div>
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDomainClose}>Cancel</Button>
          <Button onClick={handleEditDomainClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Tables;
