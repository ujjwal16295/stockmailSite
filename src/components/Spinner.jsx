import { ClipLoader } from "react-spinners";

const Loading = (props) => {
  return <ClipLoader className="text-center" color={"#000000"} loading={props.loading} size={50} />;
};


export default Loading