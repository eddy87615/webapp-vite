import Back from '../Back/Back';
import { useState, useEffect } from 'react';

export default function MarsRover() {
  const [mars, setMars] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const marsPic = async () => {
      try {
        let picData;
        setLoading(true);
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
          const roverResponse = await fetch(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX'
          );
          const roverData = await roverResponse.json();
          const latest = roverData.rover.max_sol;

          const picResponse = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${latest}&api_key=mrQDAufdFomWkLGpaRyMRdelGmAMAqZCwTHtgTeX`
          );
          picData = await picResponse.json();
        }

        setMars(picData ? picData.photos : []);
      } catch (error) {
        console.error('ERROR', error);
      } finally {
        setLoading(false);
      }
    };
    marsPic();
  }, []);

  return (
    <>
      <Back />
      <div
        className="overflow-auto h-[90dvh] py-6
        flex flex-col gap-[2%] relative"
      >
        <h2 className="text-white text-[2rem] font-semibold text-center">
          Mars Rover
        </h2>
        {loading ? (
          <p
            className="text-white text-[1.5rem] text-center
          absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          >
            Loading...
          </p>
        ) : (
          <ul className="flex flex-col gap-[2rem]">
            {mars.map((photo) => (
              <div key={photo.id} className="text-white">
                <li>
                  <img
                    src={photo.img_src}
                    alt={`Sol ${photo.sol} - ${photo.id}`}
                    width={500}
                    height={500}
                  />
                </li>
                <li>Earth Date: {photo.earth_date}</li>
                <li>Camera Name: {photo.camera.full_name}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
