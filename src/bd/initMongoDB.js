import { env } from "../utils/env.js";

export const initMongoDB = () => {

try {
    const user = env('MONGOBD_USER');
    const pwd = env('MONGOBD_PASSWORD');
    const url = env

} catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
    };
};
