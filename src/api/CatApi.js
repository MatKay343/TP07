// api/catApi.js
import axios from "axios";

const API_KEY = "live_UMBdmelRX6KIKWlpP37xwqFa1OSOi5blYux99uZRtlw6AfRai7sjHMSluVTI2iIz";

export const getCatImages = async () => {
  // hecho por IA: acá aprendí que Axios sirve para pedir datos a una API de forma fácil.
  const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
    params: { limit: 10 },
    headers: { "x-api-key": API_KEY }
  });
  return response.data;
};
