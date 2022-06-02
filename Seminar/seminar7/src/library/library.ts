/**
 * @정규_표현식_변환
 */
const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

const library = { regex };

export default library;
