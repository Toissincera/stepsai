import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().required("No email provided").email("Invalid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password minimum 8 characters")
    .matches(/[a-zA-Z0-9]/, "Numbers and letter only"),
  department: yup.string(), // or enum, but these are volatile not just dynamic
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("No email provided").email("Invalid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password minimum 8 characters")
    .matches(/[a-zA-Z0-9]/, "Numbers and letter only"),
});

// How to check validity
// signUpSchema
//   .isValid({ email: signupEmail, password: signUpPassword })
//   .then((valid) => {
//     console.log("Returns a BOOL btw => ", valid);
//   });
