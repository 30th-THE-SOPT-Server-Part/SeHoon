import Member from './Member';

export default interface Dinner {
	member: Member[];
	shuffle: (array: Member[]) => Member[];
	organize: (array: Member[]) => void;
}
