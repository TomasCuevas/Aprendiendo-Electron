import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

//* assets *//
import { noImage } from "@/assets";

//* styles *//
import "./newArtistForm.scss";

//* interface *//
interface Props {
  onClose(): void;
}

export const NewArtistForm: React.FC<Props> = ({ onClose }) => {
  const [image, setImage] = useState(noImage);

  const onDrop = useCallback(async (acceptedFile: File[]) => {}, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="new__artist-form">
      <div {...getRootProps()} className="new__artist-form-banner">
        <input {...getInputProps()} />
        <Image src={image} />
      </div>
      <Form.Input name="name" placeholder="Nombre del artista" />
      <Form.Button type="submit" fluid primary>
        Crear artista
      </Form.Button>
    </Form>
  );
};
