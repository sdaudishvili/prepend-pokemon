import { axiosRemote as axios } from '@/utils/axios';

export const swrFetcher = (url) => axios.get(url).then((res) => res.data);
