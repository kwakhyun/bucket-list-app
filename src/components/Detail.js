import React from "react";
import { Text, Grid, StyleBtn } from "../styles/DetailStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBucketFB, updateBucketFB } from "../redux/modules/bucket";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  return (
    <div>
      <Text>
        {bucket_list[params.index] ? bucket_list[params.index].text : ""}
      </Text>
      <Grid>
        <StyleBtn
          onClick={() => {
            dispatch(updateBucketFB(bucket_list[params.index].id));
            navigate("/");
          }}
        >
          완료
        </StyleBtn>
        <StyleBtn
          onClick={() => {
            dispatch(deleteBucketFB(bucket_list[params.index].id));
            navigate("/");
          }}
        >
          삭제
        </StyleBtn>
        <StyleBtn onClick={() => navigate(-1)}>뒤로가기</StyleBtn>
      </Grid>
    </div>
  );
};

export default Detail;
