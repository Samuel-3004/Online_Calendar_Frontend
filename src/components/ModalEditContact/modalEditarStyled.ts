import styled from "styled-components";

export const StyledModalEdit = styled.dialog`
  background-color: var(--color-grey-3);
  border-radius: var(--border-radius);
  margin: 10px 10px 0px 10px;
  margin: 0 auto;
  max-width: 369px;
  width: 90%;
  position: absolute;
  top: 31%;
  border: none;

  .container-modal {
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

        p {
          font-size: 1rem;
          color: var(--color-grey-0);
        }

        .contact-title {
          height: 38px;
          border-radius: var(--border-radius);
          color: var(--color-grey-0);
          background-color: var(--color-grey-2);
          outline: none;
          border: none;
          padding-left: 20px;
          margin: 0px;
          display: flex;
          align-items: center;
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
          border: none;
          padding-left: 20px;
        }
      }

      .btns {
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-between;

        .btn-salve {
          height: 38px;
          border-radius: var(--border-radius);
          border: none;
          background-color: var(--color-primary-negative);
          color: #ffff;
          width: 60%;
        }

        .btn-excluir {
          height: 38px;
          border-radius: var(--border-radius);
          border: none;
          background-color: var(--color-grey-1);
          color: #ffff;
          width: 35%;

          :hover {
            background-color: var(--color-grey-2);
          }
        }
      }
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;
