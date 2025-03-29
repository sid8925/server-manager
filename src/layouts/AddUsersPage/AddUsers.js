import React from "react";
import { Card, FormControl, FormLabel, TextField, useMediaQuery } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useNavigate } from "react-router-dom";

export default function AddUsers() {
  const isMediumScreen = useMediaQuery("(max-width:768px)");
  const isSmallScreen = useMediaQuery("(max-width:576px)");
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox mt={5}>
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
              Add Users
            </MDTypography>
          </MDBox>

          <MDBox
            px={3}
            py={5}
            display="flex"
            flexDirection="column"
            gap="20px"
            justifyContent="space-between"
          >
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                First Name
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                Last Name
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                Email Id
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                Mobile No.
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                Address
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: isSmallScreen ? "5px" : "15px",
                alignItems: "center",
              }}
            >
              <FormLabel
                sx={{
                  fontSize: isSmallScreen ? 14 : 16,
                  width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "20%",
                }}
              >
                Status
              </FormLabel>
              <TextField
                size={isSmallScreen ? "small" : "medium"}
                variant="outlined"
                sx={{ width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "50%" }}
                InputProps={{
                  sx: { fontSize: "14px" },
                }}
              />
            </FormControl>
          </MDBox>
          <MDBox pb={4} px={3} style={{ display: "flex", justifyContent: "end", gap: "15px" }}>
            <MDButton component="a" variant="contained" color="info" style={{ width: "10rem" }}>
              Submit
            </MDButton>
            <MDButton
              component="a"
              variant="contained"
              color="info"
              style={{ width: "10rem" }}
              onClick={() => {
                navigate("/user-list");
              }}
            >
              Go To User List{" "}
            </MDButton>
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}
