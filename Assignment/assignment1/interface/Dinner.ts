import { Member } from "./Member";

export interface Dinner {
  member: Member[];
  shuffle: (array: Member[]) => Member[];
  organize: (array: Member[]) => void;
}
