import { useCallback, useState } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import classNames from "classnames";

//* assets *//
import { noImage } from "@/assets";

//* services *//
import { createArtist, getUrlFile, uploadFileService } from "@/services";

//* form data *//
import { initialValues, validationSchema } from "./newArtistForm.data";

//* styles *//
import "./newArtistForm.scss";
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
    onSubmit: async (formValues) => {
      try {
        const { image, name } = formValues;
        const response = await uploadFileService(image!, "artists", uuid());

        const imageUrl = await getUrlFile(response.metadata.fullPath);

        await createArtist(imageUrl, name);
        onClose();
      } catch (error) {
        console.error(error);
      }
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
          error: formik.errors.image,
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
