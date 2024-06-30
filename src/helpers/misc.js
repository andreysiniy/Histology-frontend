import config from "../config.json";

export function GetAPI() {
    return (config.USE_DEV_API) ? config.API_DEV : config.API;
}