import { httpServerAPI } from "@/utils/httpClient";

interface XOResult {
  board: string[][];
  winner?: string | null;
  error?: string | null;
}

export const initBoard = async () => {
  try {
    const { data: response } = await httpServerAPI.get<Promise<XOResult>>(
      `/gamexo`
    );
    return (await response)?.board;
  } catch (error: any) {
    return null;
  }
};

export const moveBoard = async (row: number, col: number) => {
  try {
    const { data: response } = await httpServerAPI.post<Promise<XOResult>>(
      `/gamexo/move`,
      {
        row,
        col,
      }
    );
    return response;
  } catch (error: any) {
    return { error: error?.response?.data };
  }
};
