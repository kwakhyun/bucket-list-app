import { useNavigate } from "react-router-dom";

import { StyledText, StyledButton } from "../Detail/styled";

export const Empty = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <StyledText>Page Not Found!</StyledText>
      <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
    </div>
  );
};
