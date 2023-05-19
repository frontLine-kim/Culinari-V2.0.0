import styled from "styled-components";

function SignupBtn({ type }) {
  if (type === "signup") {
    return <SignBtn>가입하기</SignBtn>;
  }
}

const SignBtn = styled.button`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  letter-spacing: center;
  background-color: #ffffff;
  padding: 10px;
  margin: 6px 0;
  color: #783CB7;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  border-radius: 3px;
  outline: 1px solid #783CB7;
  margin: 10px 0px;
`;

export default SignupBtn;
