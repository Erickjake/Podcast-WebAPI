import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async(podcastsName?:string):Promise<PodcastTransferModel> => {

  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }
  const query = podcastsName?.split('?p=')[1] ?? '';
  const data = await repositoryPodcast(query)

  responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT
  
  responseFormat.body = data

  return responseFormat
}