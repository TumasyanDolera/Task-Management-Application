
import ApiAxios from "../../redux_toolkit/axios"


  export const refresh_token = async (refreshToken: string | null) => {
    try {
      const res = await ApiAxios.post('/auth/refresh-token', {
        refreshToken,
      });
      return res.data.data; 
    } catch (error) {
      throw error;
    }
  };