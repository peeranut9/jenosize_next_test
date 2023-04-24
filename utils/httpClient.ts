import axios from "axios";

export const httpServerAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_SERVER_API,
});

export const httpLocalAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
});

export const postDataFromAPI = async ({
  path,
  lang,
  body,
  headers,
}: {
  path: string;
  lang?: string;
  body?: any;
  headers?: any;
}): Promise<{ data: any; status: number | null }> => {
  try {
    const response = await axios.post(
      `${path}`,
      {
        lang: lang || "th",
        ...body,
      },
      {
        headers: { headers },
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
      }
    );
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    return { data: null, status: null };
  }
};

export const getDataFromCMS = async ({
  path,
  lang,
  param,
}: {
  path: string;
  lang?: string;
  param?: any;
}): Promise<{ data: any; status: number | null }> => {
  try {
    const response = await axios.get(`${path}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      },
      params: {
        lang: lang || "th",
        ...param,
      },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_CMS,
    });
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    return { data: null, status: null };
  }
};
