import * as Yup from "yup";

export const customerValidationSchema = Yup.object().shape({
  Name: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required"),
    Surname: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required"),
    Password: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required"),
Replaypassword: Yup.string("")
.required("this field can not be empty")
    .min(10, "min 10 character is required"),
});
export const customerValidationSchema2 = Yup.object().shape({
    Name: Yup.string("")
      .required("this field can not be empty")
      .min(10, "min 10 character is required"),
      Password: Yup.string("")
      .required("this field can not be empty")
      .min(10, "min 10 character is required"),
  });