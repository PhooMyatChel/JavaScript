// components/Validation.js
import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Township is required"),
});
