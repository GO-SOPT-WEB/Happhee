import styled from "styled-components";
import { BreadList, Header, AddBreadInfo } from "../components";

const TodoMain = () => {
  return (
    <St.TodoMainWrapper>
      <Header />
      <BreadList />
      <AddBreadInfo />
    </St.TodoMainWrapper>
  );
};

export default TodoMain;

const St = {
  TodoMainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 50%;
    height: fit-content;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.pink_1};
    border-radius: 1rem;
  `,
};
