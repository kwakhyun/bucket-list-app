import React from "react";
import { StyleList, StyleItem } from "../styles/TodoStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const navigate = useNavigate();
  const bucketList = useSelector((state) => state.bucket.list);
  
  return (
    <StyleList>
      {bucketList.map((item, index) => {
        return (
          <StyleItem
            completed={item.completed}
            key={index}
            onClick={() => {
              navigate("detail/" + index);
            }}
          >
            {item.text}
          </StyleItem>
        );
      })}
    </StyleList>
  );
};

export default Todo;
