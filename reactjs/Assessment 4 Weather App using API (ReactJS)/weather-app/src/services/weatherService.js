const API_KEY = "e83b606c45430796ff4da6cdb6979747";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// PROMISE + ASYNC/AWAIT
export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
};
