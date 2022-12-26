import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteBucketFB, updateBucketFB } from "../../redux/modules/bucket";

import { StyledText, StyledGrid, StyledButton } from "./styled";

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledText>
        {bucket_list[params.index] ? bucket_list[params.index].text : ""}
      </StyledText>
      <StyledGrid>
        <StyledButton
          onClick={() => {
            dispatch(updateBucketFB(bucket_list[params.index].id));
            navigate("/");
          }}
        >
          완료
        </StyledButton>
        <StyledButton
          onClick={() => {
            dispatch(deleteBucketFB(bucket_list[params.index].id));
            navigate("/");
          }}
        >
          삭제
        </StyledButton>
        <StyledButton onClick={() => navigate(-1)}>뒤로가기</StyledButton>
      </StyledGrid>
    </div>
  );
};
