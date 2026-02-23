import api from "../../api";

export const getData = async (endpoint, params = {}) => {
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

export const deleteData = async (endpoint, id) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error("DELETE API Error:", error);
    throw error;
  }
};