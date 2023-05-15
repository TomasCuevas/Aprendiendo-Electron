import { useState } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

//* form data *//
import { initialValues, validationSchema } from "./emailUpdateForm.data";

//* store *//
import { useUserStore } from "@/store";

//* interface *//
interface Props {
  onClose(): void;
}

export const EmailUpdateForm: React.FC<Props> = ({ onClose }) => {
  const { updateEmail } = useUserStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await updateEmail(formValues.email, formValues.password);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
        placeholder="Nuevo correo electrónico"
        error={formik.errors.email ? true : false}
      />
      <Form.Input
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
        placeholder="Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: () => setShowPassword((prev) => !prev),
        }}
        error={formik.errors.password ? true : false}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Actualizar email
      </Form.Button>
    </Form>
  );
};
