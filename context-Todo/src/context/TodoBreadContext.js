import { createContext } from "react";

export const todoBreadInfo = [
  { id: 1, content: "앙버터", isDone: false },
  { id: 2, content: "크루아상", isDone: false },
  { id: 3, content: "딸기케이크", isDone: false },
  { id: 4, content: "마들렌", isDone: false },
  { id: 5, content: "쿠키🍪", isDone: false },
  { id: 6, content: "식빵", isDone: false },
];

export const todoBreadReducer = (state, action) => {
  switch (action.type) {
    case "BREAD_CREATE":
      return state.concat({
        id: state.length + 1,
        content: action.payload,
        isDone: false,
      });
    case "BREAD_TOGGLE":
      return state.map((breadInfo) =>
        breadInfo.id === action.id
          ? {
              ...breadInfo,
              isDone: !breadInfo.isDone,
            }
          : breadInfo
      );
    default:
      return state;
  }
};
export const TodoBreadContextInfo = createContext(todoBreadInfo);
export const TodoBreadDispatch = createContext();
