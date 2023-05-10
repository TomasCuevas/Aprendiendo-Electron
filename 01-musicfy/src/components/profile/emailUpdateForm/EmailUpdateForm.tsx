import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";

//* yup validations *//
const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
};

//* form values *//
const initialValues = () => ({
  email: "",
  password: "",
});

//* interface *//
interface Props {
  onClose(): void;
}

export const EmailUpdateForm: React.FC<Props> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log(formValues);
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
