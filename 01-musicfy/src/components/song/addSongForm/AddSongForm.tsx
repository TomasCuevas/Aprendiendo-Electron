import { useCallback, useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import classNames from "classnames";

//* form data *//
import { initialValues, validationSchema } from "./addSongForm.data";

//* styles *//
import "./addSongForm.scss";
import { useDropzone } from "react-dropzone";

//* interface *//
interface Props {
  onClose(): void;
}

export const AddSongForm: React.FC<Props> = ({ onClose }) => {
  const [songName, setSongName] = useState("");

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
    setSongName(file.name);
    formik.setFieldValue("file", file);
    formik.setFieldValue("name", file.name.split(".")[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={[]}
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

      <Form.Button type="submit" primary loading={formik.isSubmitting}>
        Subir canción
      </Form.Button>
    </Form>
  );
};
