import { Link } from 'react-router-dom';

export default function Home() {
  const btinfo = [
    {
      txt: 'Astronomy Picture of the day',
      link: '../Astronomy',
    },
    {
      txt: 'Mars Rover',
      link: '../MarsRover',
    },
    {
      txt: 'NASA Library',
      link: '../Library',
    },
  ];

  return (
    <div className=" w-full h-full">
      <h1 className="text-white text-[3rem] font-bold text-center pt-20 pb-6 leading-10">
        Explore NASA
        <br />
        <span className="text-[1rem] font-normal">
          Know more about the universe with NASA API.
        </span>
      </h1>
      <p className="text-white text-center text-[0.8rem]">
        The National Aeronautics and Space Administration is an independent
        agency of the U.S. federal government responsible for the civil space
        program, aeronautics research, and space research.
      </p>
      <ul className="flex flex-col gap-10 mt-[15%]">
        {btinfo.map((inner, index) => (
          <li key={index}>
            <Link
              to={inner.link}
              className="text-white text-center w-[80%] flex justify-center items-center 
              border-4 mx-auto py-6 rounded-2xl"
            >
              {inner.txt}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center items-center my-20 gap-10">
        <li>
          <a href="https://api.nasa.gov/" target="_black" alt="nasa api site">
            <img
              src="/favicon-192.png"
              alt="nasa logo"
              width={50}
              height={50}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/eddy87615/webapp-nasa.git"
            target="_black"
            alt="this project github"
          >
            <img
              src="/GitHub_Invertocat_Logo.png"
              alt="github logo"
              width={50}
              height={50}
            />
          </a>
        </li>
      </ul>
      {/* <Image src="/favicon-192.png" width={100} height={100} alt="nasa logo" /> */}
    </div>
  );
}
