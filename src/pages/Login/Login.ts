import styled from "styled-components";

export const StyledLogin = styled.main`
  max-width: 320px;
  padding: 50px;
  margin: 0 auto;
  color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;

  h1 {
    font-size: 18px;
    font-weight: bolder;
    color: var(--color-primary);
    margin: 0 auto;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background-color: var(--color-grey-3);
    border-radius: var(--border-radius);
    width: 296px;
    align-items: center;
    justify-content: center;
    padding: 25px;

    h3 {
      font-size: 14px;
      font-weight: bold;
      color: var(--color-grey-0);
      margin: 0 auto;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 264px;

      section {
        display: flex;
        flex-direction: column;
        display: flex;
        flex-direction: column;
        gap: 18px;

        label {
          font-size: 12px;
        }

        input {
          height: 38px;
          border-radius: var(--border-radius);
          color: var(--color-grey-0);
          background-color: var(--color-grey-2);
          border: none;
          padding-left: 20px;
          outline: none;

          :focus {
            border: 1px solid var(--color-grey-1);
          }
        }
      }

      section {
        .icon-input {
          border: 1px solid var(--color-grey-2);
          border-radius: var(--border-radius);
          background-color: var(--color-grey-2);
          display: flex;
          align-items: center;

          :has(input:focus) {
            border: 1px solid var(--color-grey-1);
          }

          input {
            border: none;
            width: 90%;
            padding-left: 20px;
            outline: none;
          }
        }

        .btn-show-closed {
          background-color: var(--color-grey-2);
          color: #ffff;
          height: 12.65px;
        }
      }

      button {
        height: 38px;
        border-radius: var(--border-radius);
        border: none;
        background-color: var(--color-primary);
        color: var(--color-grey-0);

        :hover {
          background-color: var(--color-primary-focus);
        }
      }
    }

    footer {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 264px;

      p {
        font-size: 12px;
        margin: 0 auto;
        color: var(--color-grey-1);
      }

      button {
        height: 38px;
        border-radius: var(--border-radius);
        border: none;
        background-color: var(--color-grey-1);
        color: var(--color-grey-0);
        width: 100%;

        :hover {
          background-color: var(--color-grey-2);
        }
      }
    }
  }
`;
