import styled from "styled-components";
import { ErrorText } from "./ErrorText";

const InputContainer = styled.div`
  margin-top: ${(props) => props.mt ?? 24}px;
  position: relative;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
    padding: 0;
    margin: -1px;
  }

  input {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(30, 30, 30, 0.8);
    font-family: inherit;
    padding-left: 24px;
    height: 56px;
    width: 100%;
    background: #f8f8f8;
    border: 1px solid rgba(119, 119, 119, 0.4);
    border-radius: 24px;

    &::placeholder {
      color: #777777;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #777777;
    }

    &::-ms-input-placeholder {
      color: #777777;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Input = ({
  label,
  placeholder,
  id,
  type,
  value,
  error,
  mt,
  disabled,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  return (
    <InputContainer mt={mt}>
      <label htmlFor={id}>{label}</label>

      <div>
        <input
          type={type ?? "text"}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          {...props}
        />
      </div>

      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};
