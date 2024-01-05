import Back from '../Back/Back';

import { useState, useEffect } from 'react';

export default function Astronomy() {
  const [astronomypic, setAstronomypic] = useState(null);
  useEffect(() => {
    const fecthData = async () => {
      try {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
          const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX'
          );
          const data = await response.json();
          setAstronomypic(data);
        }
      } catch (error) {
        console.error('Error fetching astronomy picture', error);
      }
    };

    fecthData();
  }, []);
  return (
    <>
      <Back />
      {astronomypic && (
        <div
          className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%]"
        >
          <h2 className="text-white text-[2rem] font-semibold">
            {astronomypic.title}
          </h2>
          <span className="font-normal text-white text-right">
            {astronomypic.date}
          </span>

          <img
            src={astronomypic.hdurl}
            width={500}
            height={500}
            alt="NASA image for today"
          />

          <p className="text-white leading-[2rem]">
            {astronomypic.explanation}
          </p>
        </div>
      )}
    </>
  );
}
