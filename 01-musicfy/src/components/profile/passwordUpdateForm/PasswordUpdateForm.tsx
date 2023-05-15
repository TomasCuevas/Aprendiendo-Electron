import { useState } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

//* form data *//
import { initialValues, validationSchema } from "./passwordUpdateForm.data";

//* store *//
import { useUserStore } from "@/store";

//* interface *//
interface Props {
  onClose(): void;
}

export const PasswordUpdateForm: React.FC<Props> = ({ onClose }) => {
  const { updatePassword } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await updatePassword(formValues.password, formValues.newPassword);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
        placeholder="Contraseña actual"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
        error={formik.errors.password ? true : false}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        name="newPassword"
        placeholder="Nueva Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
        error={formik.errors.newPassword ? true : false}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        name="repeatNewPassword"
        placeholder="Repetir la nueva Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
        error={formik.errors.repeatNewPassword ? true : false}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Actualizar contraseña
      </Form.Button>
    </Form>
  );
};
