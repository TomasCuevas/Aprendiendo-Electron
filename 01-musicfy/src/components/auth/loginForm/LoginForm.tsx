import { useState } from "react";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import * as Yup from "yup";

//* service *//
import { loginUser } from "@/services";

//* styles *//
import "./loginForm.scss";

//* yup validations *//
const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
};

//* form values *//
const initialValues = {
  email: "",
  password: "",
};

//* interface *//
interface Props {
  goBack(): void;
  goRegister(): void;
}

export const LoginForm: React.FC<Props> = ({ goBack, goRegister }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await loginUser(formValues);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  //! on toggle show password
  const onToggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="login__form">
      <h1>Música para todos</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          value={formik.values.email}
          name="email"
          placeholder="Correo electronico"
          icon="mail outline"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.email ? true : false}
        />
        <Form.Input
          placeholder="Contraseña"
          value={formik.values.password}
          name="password"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onToggleShowPassword}
            />
          }
          type={showPassword ? "text" : "password"}
          onChange={formik.handleChange}
          error={formik.errors.password ? true : false}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Iniciar Sesión
        </Form.Button>
      </Form>

      <div className="login__form-options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿No tienes una cuenta? <span onClick={goRegister}>Registrate</span>
        </p>
      </div>
    </div>
  );
};
