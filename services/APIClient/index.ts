import { ClothingData } from '../../constants/types';
import server from './server';


class APIClient {
  async getClothingInfo(): Promise<ClothingData> {
    const { data } = await server.get();

    return { data, totalItems: data.length };
  }
}

export default new APIClient();
