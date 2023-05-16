import { useCallback, useEffect, useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";

//* form data *//
import { initialValues, validationSchema } from "./addSongForm.data";

//* services *//
import {
  createSongService,
  getAllAlbums,
  getUrlFile,
  uploadSognService,
} from "@/services";

//* styles *//
import "./addSongForm.scss";

//* interface *//
import { IAlbumOption } from "@/interfaces";

interface Props {
  onClose(): void;
}

export const AddSongForm: React.FC<Props> = ({ onClose }) => {
  const [songName, setSongName] = useState("");
  const [albumOptions, setAlbumOptions] = useState<IAlbumOption[]>([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const { album, file, name } = formValues;

        const response = await uploadSognService(file!, "songs", uuid());
        const url = await getUrlFile(response.metadata.fullPath);
        await createSongService(name, album, url);

        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    const file = acceptedFile[0];
    setSongName(file.name);
    formik.setFieldValue("file", file);
    formik.setFieldValue("name", file.name.split(".")[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllAlbums();
        const newData: IAlbumOption[] = response.map((album) => ({
          key: album.id,
          text: album.name,
          value: album.id,
        }));

        setAlbumOptions(newData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit} className="add__song-form">
      <Form.Input
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        placeholder="Nombre de la canción"
        error={formik.errors.name ? true : false}
      />
      <Form.Dropdown
        value={formik.values.album}
        onChange={(_, data) => formik.setFieldValue("album", data.value)}
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={albumOptions}
        error={formik.errors.album ? true : false}
      />

      <div
        {...getRootProps()}
        className={classNames("add__song-form-file", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()} />
        <Icon name="cloud upload" />
        <div>
          <p>
            Arrastra tu canción o haz click <span>aquí</span>
          </p>
          {songName && <p className="song__name">{songName}</p>}
        </div>
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Subir canción
      </Form.Button>
    </Form>
  );
};
