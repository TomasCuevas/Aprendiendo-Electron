import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import classNames from "classnames";

//* assets *//
import { noImage } from "@/assets";

//* form data *//
import { initialValues, validationSchema } from "./addAlbumForm.data";

//* styles *//
import "./addAlbumForm.scss";

//* interface *//
interface Props {
  onClose(): void;
}

export const AddAlbumForm: React.FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState(noImage);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log(formValues);
    },
  });

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    const file = acceptedFile[0];

    setImage(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <Form onSubmit={formik.handleSubmit} className="add__album-form">
      <div className="add__album-form-content">
        <div
          {...getRootProps()}
          className={classNames("add__album-form-content-image", {
            error: formik.errors.image,
          })}
        >
          <input {...getInputProps()} />
          <Image src={image} />
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
