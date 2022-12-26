import { Route, Routes } from "react-router-dom";

import { Detail } from "../components/Detail";
import { Empty } from "../components/Empty";
import { Todo } from "../components/Todo";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="detail/:index" element={<Detail />} />
      <Route path="*" element={<Empty />} />
    </Routes>
  );
};
