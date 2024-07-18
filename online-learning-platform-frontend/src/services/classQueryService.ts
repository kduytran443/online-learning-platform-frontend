import { axiosClient } from "@/utils/httpClient";

export const classQueryService = {
  getAllLive: () => {
    return axiosClient.get(`/v1/class-queries/all`);
  },
  searchByCategory: (searchRequest: any) => {
    return axiosClient.post(`/v1/class-queries/search-by-category`, searchRequest);
  }
};
