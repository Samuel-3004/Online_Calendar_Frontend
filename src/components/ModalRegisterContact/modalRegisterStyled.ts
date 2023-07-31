import styled from "styled-components";

export const StyledModalRegister = styled.dialog`
  background-color: var(--color-grey-3);
  border-radius: var(--border-radius);
  margin: 10px 10px 0px 10px;
  margin: 0 auto;
  max-width: 369px;
  width: 90%;
  position: absolute;
  top: 31%;
  border: none;

  .header-register {
    display: flex;
    justify-content: space-between;
    border-radius: 4px 4px 0px 0px;
    align-items: center;
    height: 38px;
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    padding: 10px;
    margin: 0px;

    h3 {
      font-size: 14px;
      font-weight: bold;
      color: var(--color-grey-0);
    }
    p {
      font-size: 14px;
      font-weight: bold;
      color: var(--color-grey-0);
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0px 10px;
    padding: 20px 0px;

    section {
      display: flex;
      flex-direction: column;
      display: flex;
      flex-direction: column;
      gap: 18px;

      label {
        font-size: 12px;
        color: var(--color-grey-0);
      }

      input {
        height: 38px;
        border-radius: var(--border-radius);
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        border: none;
        padding-left: 20px;

        :hover {
          border: 1px solid var(--color-grey-0);
        }
      }
    }

    .options-status {
      label {
        color: var(--color-grey-0);
      }

      select {
        height: 38px;
        border-radius: var(--border-radius);
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        padding: 0px 10px;

        option {
          padding: 5px 0px;
        }
      }
    }

    button {
      height: 38px;
      border-radius: var(--border-radius);
      border: none;
      background-color: var(--color-primary);
      color: var(--color-grey-0);
      margin-bottom: 20px;
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;
