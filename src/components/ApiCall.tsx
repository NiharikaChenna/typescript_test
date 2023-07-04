import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

interface WeatherData {
  base: string;
  main: {
    feels_like: number;
    temp_max: number;
    temp_min: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
}

export default function ApiCall() {
  const [apiData, setApiData] = useState<WeatherData | undefined>();

  const fetchData = async () => {
    const url = "/api";
    const response: AxiosResponse<WeatherData> = await axios.get<WeatherData>(url);
    const data: WeatherData = response.data;
    console.log(data);
    console.log(url);
    setApiData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const sum:number = apiData ? Object.values(apiData.main).reduce((accumulator, data) => accumulator + data, 0) : 0;
  
  return (
    <div>
      <h1>{apiData?.base}</h1>
      <h5>{apiData?.main.humidity}</h5>
      <p>{apiData?.visibility}</p>
      <p>sum:{sum}</p>
    </div>
  );
}
