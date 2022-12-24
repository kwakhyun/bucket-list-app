import React from "react";
import { Percent, ProgressBar, HighLight } from "../styles/ProgressStyle";
import { useSelector } from "react-redux";

const Progress = () => {
  const bucketList = useSelector((state) => state.bucket.list);

  const count = bucketList.reduce((acc, cur) => {
    if (cur.completed) acc++;
    return acc;
  }, 0);

  const percent = parseInt((count / bucketList.length) * 100) + "%";
  const percentInfo = `달성률 ${percent}`;

  return (
    <>
      <Percent>{percentInfo}</Percent>
      <ProgressBar>
        <HighLight width={percent} length={bucketList.length} />
      </ProgressBar>
    </>
  );
};

export default Progress;
