import React, { useState, type CSSProperties } from "react";
import type { ButtonProps } from "../../../types";

const getStyles = ({ variant, size, status }: ButtonProps): CSSProperties => {
  let backgroundColor =
    variant === "primary"
      ? "blue"
      : variant === "secondary"
      ? "gray"
      : variant === "danger"
      ? "red"
      : "";
  let fontSize =
    size === "small"
      ? "8px"
      : size === "medium"
      ? " 12px"
      : size === "large"
      ? " 16px"
      : "";
  let cursor = status ? "pointer" : "not-allowed";

  return {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor,
    fontSize,
    cursor,
    color: "white",
  };
};

const Button: React.FC<ButtonProps> = (props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <button style={getStyles(props)} onClick={handleClick} disabled={loading}>
      {loading ? "Loading..." : props.children}
    </button>
  );
};

export default Button;
