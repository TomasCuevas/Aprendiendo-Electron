import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

//* styles *//
import "@/components/auth/registerForm.scss";

//* yup validations *//
const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    username: Yup.string().required(),
  });
};

//* form values *//
const initialValues = {
  email: "",
  password: "",
  username: "",
};

//* interface *//
interface Props {
  goBack(): void;
  goLogin(): void;
}

export const RegisterForm: React.FC<Props> = ({ goBack, goLogin }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (formValues) => {
      console.log("Registro OK");
      console.log(formValues);
    },
  });

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
              name="eye"
              link
              onClick={() => console.log("show password")}
            />
          }
          type="password"
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
