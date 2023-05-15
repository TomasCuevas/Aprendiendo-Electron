import * as Yup from "yup";

export const initialValues = () => ({
  email: "",
  password: "",
  username: "",
});

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    username: Yup.string().required(),
  });
};
