import { Button } from "semantic-ui-react";
import { getAuth } from "firebase/auth";

export const App: React.FC = () => {
  console.log(getAuth());

  return (
    <>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </>
  );
};
