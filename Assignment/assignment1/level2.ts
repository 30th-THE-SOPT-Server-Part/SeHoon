import Dinner from './interface/Dinner';

const dinner: Dinner = {
	member: [
		{
			name: '채정아',
			group: 'ob',
		},
		{
			name: '김동재',
			group: 'yb',
		},
		{
			name: '강민재',
			group: 'yb',
		},
		{
			name: '김루희',
			group: 'ob',
		},
		{
			name: '박진수',
			group: 'ob',
		},
	],
	shuffle(members) {
		return members.sort(() => Math.random() - 0.5);
	},
	organize(members) {
		this.shuffle(members);

		const obMember = members.find((member) => member.group === 'ob');
		const ybMember = members.find((member) => member.group === 'yb');

		console.log(`오늘의 저녁 식사 멤버는 ${obMember?.name}, ${ybMember?.name}`);
	},
};

dinner.organize(dinner.member);

export default dinner;
