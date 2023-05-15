import { useUserStore } from "@/store";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

//* form data *//
import { initialValues, validationSchema } from "./displayNameUpdateForm.data";

//* interface *//
interface Props {
  onClose(): void;
}

export const DisplayNameUpdateForm: React.FC<Props> = ({ onClose }) => {
  const { getMe, updateDisplayName } = useUserStore();

  const formik = useFormik({
    initialValues: initialValues(getMe()!.displayName || ""),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await updateDisplayName(formValues.displayName);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="displayName"
        placeholder="Nombre y apellido"
        onChange={formik.handleChange}
        value={formik.values.displayName}
        error={formik.errors.displayName ? true : false}
        focus
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Actualizar nombre
      </Form.Button>
    </Form>
  );
};
