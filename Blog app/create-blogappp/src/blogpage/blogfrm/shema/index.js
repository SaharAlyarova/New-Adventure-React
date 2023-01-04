import * as Yup from "yup";

export const blogValidationSchema = Yup.object().shape({
  title: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required"),
    body: Yup.string("")
    .required("this field can not be empty")
    .max(100, "min 100 character is required"),
    author: Yup.string("")
    .required("this field can not be empty")
});