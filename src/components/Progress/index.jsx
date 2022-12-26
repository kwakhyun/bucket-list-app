import { useSelector } from "react-redux";

import { StyledPercent, StyledProgressBar, StyledHighLight } from "./styled";

export const Progress = () => {
  const bucketList = useSelector((state) => state.bucket.list);

  const count = bucketList.reduce((acc, cur) => {
    if (cur.completed) acc++;
    return acc;
  }, 0);

  const percent = parseInt((count / bucketList.length) * 100) + "%";
  const percentInfo = `달성률 ${percent}`;

  return (
    <>
      <StyledPercent>{percentInfo}</StyledPercent>
      <StyledProgressBar>
        <StyledHighLight width={percent} length={bucketList.length} />
      </StyledProgressBar>
    </>
  );
};
