import * as Yup from "yup";

export const initialValues = () => ({
  name: "",
  album: "",
  file: null,
});

export const validationSchema = () => {
  return Yup.object({
    name: Yup.string().required(),
    album: Yup.string().required(),
    file: Yup.string().required(),
  });
};
