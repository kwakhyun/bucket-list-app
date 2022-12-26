import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledList, StyledItem } from "./styled";

export const Todo = () => {
  const navigate = useNavigate();
  const bucketList = useSelector((state) => state.bucket.list);

  return (
    <StyledList>
      {bucketList.map((item, index) => {
        return (
          <StyledItem
            completed={item.completed}
            key={index}
            onClick={() => {
              navigate("detail/" + index);
            }}
          >
            {item.text}
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
