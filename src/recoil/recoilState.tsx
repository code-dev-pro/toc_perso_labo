import { atom } from "recoil";
import { IBadge } from "../interface/interface";

export const TOTALTIME = atom<number>({
  key: "TOTALTIME",
  default: 0,
});

export const WIN_BADGE = atom<Array<IBadge>>({
  key: "WIN_BADGE",
  default: [],
});
