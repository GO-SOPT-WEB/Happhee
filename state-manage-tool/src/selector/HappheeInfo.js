import { selector, selectorFamily } from "recoil";
import { happheeInfo } from "../atom/HappheeInfo";

export const happheeMessage = selector({
  key: "happheeMessage/get",
  get: ({ get }) => {
    return get(happheeInfo).messageList;
  },
  set: ({ get, set }, newMessage) => {},
});
