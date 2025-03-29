/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const FName = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1} style={{ width: "7rem" }}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
  const LName = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1} style={{ width: "7rem" }}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: "First Name",
        accessor: "fname",
        align: "left",
        Cell: ({ row }) => row.original.fNameComponent,
      },
      {
        Header: "Last Name",
        accessor: "lname",
        align: "left",
        Cell: ({ row }) => row.original.lNameComponent,
      },
      {
        Header: "Email",
        accessor: "email",
        align: "center",
        Cell: ({ row }) => row.original.emailComponent,
      },
      {
        Header: "Mobile No.",
        accessor: "mobile",
        align: "center",
        Cell: ({ row }) => row.original.mobileComponent,
      },
      {
        Header: "Address",
        accessor: "address",
        align: "center",
        Cell: ({ row }) => row.original.addressComponent,
      },
      {
        Header: "Role",
        accessor: "role",
        align: "center",
        Cell: ({ row }) => row.original.roleComponent,
      },
      {
        Header: "Status",
        accessor: "status",
        align: "center",
        Cell: ({ row }) => row.original.statusComponent,
      },
      {
        Header: "Action",
        accessor: "action",
        align: "center",
        Cell: ({ row }) => row.original.actionComponent,
      },
    ],

    rows: [
      {
        id: 1,
        fName: "Alexa", // Raw text for search
        fNameComponent: <FName name="Alexa" />,
        lName: "Liras",
        lNameComponent: <LName name="Liras" />,
        email: "alexa@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            alexa@gmail.com
          </MDTypography>
        ),
        mobile: "8324322323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8324322323
          </MDTypography>
        ),
        address: "d-234, kkadfj, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-234, kkadfj, sakdfj dlkfj, sjk ssjkf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 2,
        fName: "John", // Raw text for search
        fNameComponent: <FName name="John" />,
        lName: "Michael",
        lNameComponent: <LName name="Michael" />,
        email: "John@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John@gmail.com
          </MDTypography>
        ),
        mobile: "8324322323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8322422323
          </MDTypography>
        ),
        address: "d-234, kkadfj, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-324, sdkjsd, safas klwer, sjk aflksdf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 3,
        fName: "Laurent", // Raw text for search
        fNameComponent: <FName name="Laurent" />,
        lName: "Perrier",
        lNameComponent: <LName name="Perrier" />,
        email: "Laurent@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Laurent@gmail.com
          </MDTypography>
        ),
        mobile: "8322422323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8322422323
          </MDTypography>
        ),
        address: "d-234, kkadfj, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-324, sdkjsd, safas klwer, sjk aflksdf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 4,
        fName: "Michael", // Raw text for search
        fNameComponent: <FName name="Michael" />,
        lName: "Levi",
        lNameComponent: <LName name="Levi" />,
        email: "Michael@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Michael@gmail.com
          </MDTypography>
        ),
        mobile: "8324322323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8322422323
          </MDTypography>
        ),
        address: "d-234, kkadfj, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-245, sdkjsd, safas klwer, sjk aflksdf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 5,
        fName: "Richard", // Raw text for search
        fNameComponent: <FName name="Richard" />,
        lName: "Gran",
        lNameComponent: <LName name="Gran" />,
        email: "Richard@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Richard@gmail.com
          </MDTypography>
        ),
        mobile: "8234422323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8234422323
          </MDTypography>
        ),
        address: "d-234, sfsadf, sdfsd dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-245, sdfsasd, sdfsdf dlkfj, sjk ssjkf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 6,
        fName: "Miriam", // Raw text for search
        fNameComponent: <FName name="Miriam" />,
        lName: "Eric",
        lNameComponent: <LName name="Eric" />,
        email: "Miriam@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Miriam@gmail.com
          </MDTypography>
        ),
        mobile: "2463453454",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2463453454
          </MDTypography>
        ),
        address: "d-234, sfsadf, sdfsd dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-245, sdfsasd, sdfsdf dlkfj, sjk ssjkf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 7,
        fName: "John", // Raw text for search
        fNameComponent: <FName name="John" />,
        lName: "Michael",
        lNameComponent: <LName name="Michael" />,
        email: "John@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John@gmail.com
          </MDTypography>
        ),
        mobile: "9234223423",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9234223423
          </MDTypography>
        ),
        address: "d-323, hasfasd, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-324, sdkjsd, safas klwer, sjk aflksdf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 8,
        fName: "Richard", // Raw text for search
        fNameComponent: <FName name="Richard" />,
        lName: "Gran",
        lNameComponent: <LName name="Gran" />,
        email: "Richard@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Richard@gmail.com
          </MDTypography>
        ),
        mobile: "8234422323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8234422323
          </MDTypography>
        ),
        address: "d-234, sfsadf, sdfsd dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-245, sdfsasd, sdfsdf dlkfj, sjk ssjkf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        id: 9,
        fName: "Laurent", // Raw text for search
        fNameComponent: <FName name="Laurent" />,
        lName: "Perrier",
        lNameComponent: <LName name="Perrier" />,
        email: "Laurent@gmail.com",
        emailComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Laurent@gmail.com
          </MDTypography>
        ),
        mobile: "8322422323",
        mobileComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8322422323
          </MDTypography>
        ),
        address: "d-234, kkadfj, sakdfj dlkfj, sjk ssjkf",
        addressComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            d-324, sdkjsd, safas klwer, sjk aflksdf
          </MDTypography>
        ),
        role: "User",
        roleComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User
          </MDTypography>
        ),
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
    ],
  };
}
