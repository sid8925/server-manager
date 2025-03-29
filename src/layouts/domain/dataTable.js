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
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: "author",
        accessor: "author",
        width: "45%",
        align: "left",
        Cell: ({ row }) => row.original.authorComponent,
      },
      {
        Header: "function",
        accessor: "function",
        align: "left",
        Cell: ({ row }) => row.original.functionComponent,
      },
      {
        Header: "status",
        accessor: "status",
        align: "center",
        Cell: ({ row }) => row.original.statusComponent,
      },
      {
        Header: "employed",
        accessor: "employed",
        align: "center",
        Cell: ({ row }) => row.original.employedComponent,
      },
      {
        Header: "action",
        accessor: "action",
        align: "center",
        Cell: ({ row }) => row.original.actionComponent,
      },
    ],

    rows: [
      {
        author: "John Michael", // Raw text for search
        authorComponent: <Author image={team2} name="John Michael" />, // UI component
        function: "Manager",
        functionComponent: <Job title="Manager" description="Organization" />,
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "23/04/18",
        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
      {
        author: "Alexa Liras",
        authorComponent: <Author image={team3} name="Alexa Liras" />,
        function: "Programator",
        functionComponent: <Job title="Programator" description="Developer" />,

        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "11/01/19",
        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
      {
        author: "Laurent Perrier",
        authorComponent: <Author image={team4} name="Laurent Perrier" />,
        function: "Executive",
        functionComponent: <Job title="Executive" description="Projects" />,
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "19/09/17",

        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
      {
        author: "Michael Levi",
        authorComponent: <Author image={team3} name="Michael Levi" />,
        function: "Programator",
        functionComponent: <Job title="Programator" description="Developer" />,
        status: "online",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "24/12/08",

        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
      {
        author: "Richard Gran",
        authorComponent: <Author image={team3} name="Richard Gran" />,
        function: "Manager",
        functionComponent: <Job title="Manager" description="Executive" />,
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "04/10/21",

        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
      {
        author: "Miriam Eric",
        authorComponent: <Author image={team4} name="Miriam Eric" />,
        function: "Programator",
        functionComponent: <Job title="Programator" description="Developer" />,
        status: "offline",
        statusComponent: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: "14/09/20",

        employedComponent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        // action: "Edit",
        // actionComponent: (
        //   <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDButton>
        // ),
      },
    ],
  };
}
