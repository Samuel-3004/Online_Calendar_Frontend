import styled from "styled-components";

export const StyledCardcontacts = styled.section`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    margin: 0px 10px;

    h2 {
      font-size: var(--font-title-1);
      :hover {
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
      }
    }
    .add-contact {
      font-size: var(--font-title-1);
      padding: 1px 7px;
      cursor: pointer;
      border-radius: var(--border-radius);
      background-color: var(--color-grey-3);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 22px 5px;
    margin: 0px 10px 20px 10px;
    background-color: var(--color-grey-3);
    border-radius: var(--border-radius);

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 10px;
      border-radius: var(--border-radius);
      margin: 0px 10px;
      gap: 30px;
      background-color: var(--color-grey-4);
      cursor: pointer;

      h2 {
        font-size: var(--font-title-1);
      }
      p {
        font-size: var(--font-headline);
      }

      :hover {
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
      }
    }
  }
`;
