import * as Yup from "yup";

export const initialValues = () => ({
  name: "",
  image: null,
});

export const validationSchema = () => {
  return Yup.object({
    image: Yup.string().required(),
    name: Yup.string().required(),
  });
};
