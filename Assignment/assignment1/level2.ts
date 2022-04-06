import { Member } from "./interface/Member";
import { Dinner } from "./interface/Dinner";

const dinner: Dinner = {
  member: [
    {
      name: "채정아",
      group: "ob",
    },
    {
      name: "김동재",
      group: "yb",
    },
    {
      name: "강민재",
      group: "yb",
    },
    {
      name: "김루희",
      group: "ob",
    },
    {
      name: "박진수",
      group: "ob",
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    let members = this.shuffle(array);

    console.log(
      `오늘의 저녁 식사 멤버는 ${members[0].name}, ${members[1].name}`
    );
  },
};

dinner.organize(dinner.member);

export default dinner;
