import * as Yup from "yup";

export const initialValues = (value: string) => ({
  displayName: value,
});

export const validationSchema = () => {
  return Yup.object({
    displayName: Yup.string().required(),
  });
};
