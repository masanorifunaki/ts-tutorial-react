import axios from 'axios';

import { User } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);

  const getMembers = async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}/members`);
      const members: User[] = response.data;

      return members;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return getMembers;
};
