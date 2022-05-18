import { School } from '.';

namespace user {
	export interface UserInfo {
		name: string;
		phone: string;
		email: string;
		age: string;
		school: School.SchoolInfo;
	}
}

export default user;
