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

// React Router
import { useNavigate } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import userTable from "layouts/userList/userTable";

import MDButton from "components/MDButton";

function Tables() {
  const { columns, rows } = userTable();
  const navigate = useNavigate();

  const [onEditUserOpen, setOnEditUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    navigate("/add-users");
  };

  const handleEditUserOpen = (User) => {
    setSelectedUser(User);
    setOnEditUserOpen(true);
    console.log("data", User);
  };

  const handleEditUserClose = () => {
    setOnEditUserOpen(false);
    setSelectedUser(null);
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
          onClick={handleAddUser}
        >
          <AddCircleIcon sx={{ width: 20, height: 20 }} /> &nbsp; Add User
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
              User List
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <DataTable
              table={{
                columns,
                rows: rows.map((row) => ({
                  ...row,
                  actionComponent: (
                    <MDButton variant="text" color="dark" onClick={() => handleEditUserOpen(row)}>
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
      <Dialog open={onEditUserOpen} fullWidth keepMounted onClose={handleEditUserClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <MDBox sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>First Name</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.fName}
                defaultValue={selectedUser?.fName}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Last Name</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.lName}
                defaultValue={selectedUser?.lName}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </div>

            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Email</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.email}
                defaultValue={selectedUser?.email}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Mobile No.</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.mobile}
                defaultValue={selectedUser?.mobile}
              />
            </div>

            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Address</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.address}
                defaultValue={selectedUser?.address}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Role</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.role}
                defaultValue={selectedUser?.role}
              />
            </div>
            <div>
              <FormLabel sx={{ fontSize: "16px" }}>Status</FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                value={selectedUser?.status}
                defaultValue={selectedUser?.status}
              />
            </div>
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditUserClose}>Cancel</Button>
          <Button onClick={handleEditUserClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Tables;
