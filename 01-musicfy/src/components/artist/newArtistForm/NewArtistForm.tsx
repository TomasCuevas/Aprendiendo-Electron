import { useCallback, useState } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";

//* assets *//
import { noImage } from "@/assets";

//* styles *//
import "./newArtistForm.scss";
import classNames from "classnames";

//* yup validations *//
const validationSchema = () => {
  return Yup.object({
    file: Yup.string().required(),
    name: Yup.string().required(),
  });
};

//* form values *//
const initialValues = () => ({
  name: "",
  file: null,
});

//* interface *//
interface Props {
  onClose(): void;
}

export const NewArtistForm: React.FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState<string>();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    const file = acceptedFile[0];
    setImage(URL.createObjectURL(file));
    formik.setFieldValue("file", file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form onSubmit={formik.handleSubmit} className="new__artist-form">
      <div
        {...getRootProps()}
        className={classNames("new__artist-form-banner", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()} />
        <Image src={image || noImage} className={classNames({ full: image })} />
      </div>
      <Form.Input
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        placeholder="Nombre del artista"
        error={formik.errors.name ? true : false}
      />
      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Crear artista
      </Form.Button>
    </Form>
  );
};
