import * as Yup from "yup";

export const initialValues = () => ({
  name: "",
  file: null,
});

export const validationSchema = () => {
  return Yup.object({
    file: Yup.string().required(),
    name: Yup.string().required(),
  });
};
