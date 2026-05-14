import api from "../../api";

interface Params {
  page?: number;
  limit?: number;
  search?: string;
  [key: string]: any;
}

export const getData = async (endpoint: string, params: Params = {}) => {
  try {
    const response = await api.get(endpoint, {
      params: {
        page: params.page || 1,
        limit: params.limit || 10,
        search: params.search || "",
        ...params, // allow extra filters
      },
    });

    return response.data;
  } catch (error) {
    console.error("GET API Error:", error);
    throw error;
  }
};

export const deleteData = async (endpoint: string, id: string | number) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error("DELETE API Error:", error);
    throw error;
  }
};