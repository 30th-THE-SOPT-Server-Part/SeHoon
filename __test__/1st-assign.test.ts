import level2 from "../Assignment/assignment1/level2";

describe("[1주차 과제]", () => {
  const log = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = log;
  });
  test("✨ 과제 코드 테스트", () => {
    const members = [
      {
        name: "채정아",
        group: "ob",
      },
      {
        name: "김루희",
        group: "ob",
      },
      {
        name: "권세훈",
        group: "ob",
      },
    ];

    const shuffledMembers = level2.shuffle(members);
    expect(shuffledMembers.length).toBe(3);
    expect(Array.isArray(shuffledMembers)).toBeTruthy();

    level2.organize(shuffledMembers);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("오늘의 저녁 식사 멤버는")
    );
  });
});
