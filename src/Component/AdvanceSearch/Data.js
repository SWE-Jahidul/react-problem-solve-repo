import { ROUTES as TYPEROUTES } from "../Type/Data";

export const ROUTES = {
  NEW: "/company/newcompany",
  EDIT: "/company/editcompany/",
  LIST: "/company/companylist",
  DETAILS: "/company/companydetails/",
  DELETE: "/company/deletecompany/",
};

export const AVD_INPUT = [
  {
    label: "Legal Name",
    name: "legal_name",
    placeholder: "Enter your Legal Name",
    type: "text",
    size: 6,
    required: false,
  },
  {
    label: "Company Type",
    name: "company_type",
    placeholder: "Enter your  company type",
    type: "select",
    path: TYPEROUTES.LIST,
    size: 6,
    required: false,
  },
  {
    label: "Status",
    name: "status",
    placeholder: "Select an status",
    type: "status",
    size: 6,
    required: false,
  },
];
