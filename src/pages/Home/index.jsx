import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addBucketFB, loadBucketFB } from "../../redux/modules/bucket";

import { Style } from "./styled";
import bgm from "../../audio/bgm.mp3";

import { Loading } from "../../components/Loading";
import { Progress } from "../../components/Progress";
import { PageRouter } from "../../router";

export const Home = () => {
  const text = useRef(null);
  const dispatch = useDispatch();

  const addBucket = () => {
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
    text.current.value = "";
  };

  const loading = useSelector((state) => state.bucket.loading);

  useEffect(() => {
    dispatch(loadBucketFB());
  });

  return (
    <>
      {loading && <Loading />}
      <Style>
        <audio controls loop src={bgm} type="audio/mp3" />
        <div>
          <h1>BUCKET LIST</h1>
          <Progress />
          <hr />
          <PageRouter />
        </div>
        <div className="inputBox">
          <input type="text" ref={text}></input>
          <button onClick={addBucket}>Add</button>
        </div>
      </Style>
    </>
  );
};
