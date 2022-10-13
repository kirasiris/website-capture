export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
export const APP_NAME_HTTP_STRING =
	process.env.NEXT_PUBLIC_APP_NAME_HTTP_STRING;
export const API_URL = process.env.NEXT_PUBLIC_PRODUCTION
	? "https://befree.herokuapp.com"
	: "http://localhost:5000";
export const PUBLIC_URL = process.env.NEXT_PUBLIC_PRODUCTION
	? "https://befree.vercel.app"
	: "http://localhost:3000";
export const KEVINFONSECA_URL = "https://kevinurielfonseca.me/";
export const KEVINFONSECA_API_URL =
	"https://kevinurielfonseca.me/wp-json/wp/v2";
