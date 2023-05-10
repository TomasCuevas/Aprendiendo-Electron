import { Icon, Modal } from "semantic-ui-react";

//* styles *//
import "./basicModal.scss";

interface Props {
  show: boolean;
  onClose(): void;
  title: string;
  size?: "tiny" | "mini" | "small" | "large" | "fullscreen";
  children: React.ReactNode;
}

export const BasicModal: React.FC<Props> = ({
  children,
  onClose,
  show,
  size = "tiny",
  title,
}) => {
  return (
    <Modal open={show} size={size} onClose={onClose} className="basic__modal">
      <Modal.Header>
        <div></div>
        <span>{title}</span>
        <Icon name="close" onClick={onClose} link />
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
