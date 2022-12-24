import React from "react";
import bgm from "./audio/bgm.mp3";
import { Style } from "./styles/AppStyle";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Detail from "./components/Detail";
import Empty from "./components/Empty";
import Progress from "./components/Progress";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addBucketFB, loadBucketFB } from "./redux/modules/bucket";

const App = () => {
  const text = React.useRef(null);
  const dispatch = useDispatch();
  
  const addBucket = () => {
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
    text.current.value = "";
  };

  const loading = useSelector((state) => state.bucket.loading);

  React.useEffect(() => {
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
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="detail/:index" element={<Detail />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </div>
        <div className="inputBox">
          <input type="text" ref={text}></input>
          <button onClick={addBucket}>Add</button>
          {/* <span
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            TOP🔺
          </span> */}
        </div>
      </Style>
    </>
  );
};

export default App;
