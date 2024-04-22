import { Button, Img } from "components";

const NewProject = ({ openPopup }) => {
  return (
    <Button
      shape="round"
      leftIcon={<Img src="images/img_vector_white_a700.svg" alt="Vector" />}
      className="gap-2.5 min-w-[118px]"
      onClick={openPopup}
    >
      New Project
    </Button>
  );
};
export default NewProject;
