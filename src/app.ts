import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const url = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && url === Routes.LIST) {
    await getListEpisodes(request, response);
  }
  if (request.method === HttpMethod.GET && url === Routes.FILTER) {
    await getFilterEpisodes(request, response);
  }
};
