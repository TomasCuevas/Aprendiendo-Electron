import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import classNames from "classnames";
import { v4 as uuid } from "uuid";

//* assets *//
import { noImage } from "@/assets";

//* form data *//
import { initialValues, validationSchema } from "./addAlbumForm.data";

//* services *//
import {
  createAlbum,
  getAllArtists,
  getUrlFile,
  uploadFileService,
} from "@/services";

//* styles *//
import "./addAlbumForm.scss";

//* interfaces *//
import { IArtistOption } from "@/interfaces";

interface Props {
  onClose(): void;
}

export const AddAlbumForm: React.FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState(noImage);
  const [artistOptions, setArtistOptions] = useState<IArtistOption[]>([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const { artist, image, name } = formValues;
        const response = await uploadFileService(image!, "albums", uuid());

        const url = await getUrlFile(response.metadata.fullPath);
        await createAlbum(name, url, artist);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    const file = acceptedFile[0];

    setImage(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllArtists();
        const newData: IArtistOption[] = response.map((artist) => ({
          key: artist.id,
          text: artist.name,
          value: artist.id,
        }));

        setArtistOptions(newData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
            value={formik.values.artist}
            onChange={(_, data) => formik.setFieldValue("artist", data.value)}
            placeholder="El álbum pertenece..."
            fluid
            search
            selection
            options={artistOptions}
            error={formik.errors.artist ? true : false}
          />
        </div>
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear álbum
      </Form.Button>
    </Form>
  );
};
