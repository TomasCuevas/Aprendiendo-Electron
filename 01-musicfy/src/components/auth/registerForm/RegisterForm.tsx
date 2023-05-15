import { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";

//* service *//
import { registerUser } from "@/services";

//* form data *//
import { initialValues, validationSchema } from "./registerForm.data";

//* styles *//
import "./registerForm.scss";

//* interface *//
interface Props {
  goBack(): void;
  goLogin(): void;
}

export const RegisterForm: React.FC<Props> = ({ goBack, goLogin }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await registerUser(formValues);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  //! on toggle show password
  const onToggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="register__form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>

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
        <Form.Input
          placeholder="¿Cómo deberíamos llamarte?"
          value={formik.values.username}
          name="username"
          icon="user circle outline"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.username ? true : false}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </Form.Button>
      </Form>

      <div className="register__form-options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={goLogin}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
};
