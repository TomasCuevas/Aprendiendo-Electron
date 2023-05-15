import * as Yup from "yup";

export const initialValues = () => ({
  password: "",
  newPassword: "",
  repeatNewPassword: "",
});

export const validationSchema = () => {
  return Yup.object({
    password: Yup.string().required(),
    newPassword: Yup.string().required(),
    repeatNewPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword")]),
  });
};
