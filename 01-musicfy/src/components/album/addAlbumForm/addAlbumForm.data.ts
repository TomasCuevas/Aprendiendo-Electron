import * as Yup from "yup";

export const initialValues = () => ({
  image: null,
  name: "",
  artist: "",
});

export const validationSchema = () => {
  return Yup.object({
    image: Yup.string().required(),
    name: Yup.string().required(),
    artist: Yup.string().required(),
  });
};
