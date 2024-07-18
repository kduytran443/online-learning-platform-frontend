import { axiosClient } from "@/utils/httpClient";

export const categoryService = {
  getCategoryById: (id: string) => {
    return axiosClient.get(`/v1/categories/${id}`);
  },
  getCategoryByCode: (code: string) => {
    return axiosClient.get(`/v1/categories/code/${code}`);
  },
  getRootList: () => {
    return axiosClient.get(`/v1/categories/root-list`);
  }
};
