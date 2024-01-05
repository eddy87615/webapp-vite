import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

export default function Back() {
  return (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' && (
      <Link to="/" className="flex">
        <TiArrowBack className="text-white w-[10%] h-[10%]" />
      </Link>
    )
  );
}
