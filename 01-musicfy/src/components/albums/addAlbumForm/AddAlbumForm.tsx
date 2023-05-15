import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import classNames from "classnames";

//* form data *//
import { initialValues, validationSchema } from "./addAlbumForm.data";

//* styles *//
import "./addAlbumForm.scss";

//* interface *//
interface Props {
  onClose(): void;
}

export const AddAlbumForm: React.FC<Props> = ({ onClose }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="add__album-form">
      <div className="add__album-form-content">
        <div
          className={classNames("add__album-form-content-image", {
            error: false,
          })}
        >
          <Image src={null} className={classNames({ full: null })} />
        </div>

        <div className="add__album-form-content-input">
          <Form.Input
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            placeholder="Nombre del álbum"
            error={formik.errors.name ? true : false}
          />
          <Form.Dropdown
            placeholder="El álbum pertenece..."
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear álbum
      </Form.Button>
    </Form>
  );
};
