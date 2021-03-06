import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_abs, margin, width, padding, liked, children } =
    props;

  if (is_abs) {
    return (
      <React.Fragment>
        <LikeButton onClick={_onClick} value={liked}>
          {children}
        </LikeButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  _onClick: () => {},
  is_abs: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  color: #000;
  padding: 12px 0px;
  box-sizing: border-box;
  border: solid 1px #ccc;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  /* background-color:#fff; */
  transition: all 0.3s;
`;

const LikeButton = styled.button`
  opacity: 0;
  width: 65px;
  height: 50px;
  color: #ffffff;
  box-sizing: border-box;
  /* font-size: 36px; */
  font-weight: 800;
  position: absolute;
  bottom: 48%;
  right: 42%;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  background-color: transparent;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export default Button;
