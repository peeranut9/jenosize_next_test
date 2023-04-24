import { SearchData } from "@/models/search.model";
import { httpServerAPI } from "@/utils/httpClient";

interface searchProps {
  query?: string;
  nextPageToken?: string;
}

export const placeQuery = async (props: searchProps) => {
  try {
    if (props.query || props.nextPageToken) {
      const { data: response } = await httpServerAPI.get<Promise<SearchData>>(
        `/place?${props.query ? `query=${props.query}` : ""}${
          props.nextPageToken ? `&nextPageToken=${props.nextPageToken}` : ""
        }`
      );
      return response;
    } else {
      return undefined;
    }
  } catch (error: any) {
    return undefined;
  }
};
