import { Text, StyleBtn } from "../styles/DetailStyle";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Text>Page Not Found!</Text>
      <StyleBtn onClick={() => navigate(-1)}>뒤로가기</StyleBtn>
    </div>
  );
};

export default Empty;
