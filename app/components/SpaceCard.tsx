import { HiMiniMapPin } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import moneySplitter from "../lib/moneySplitter";

interface SpaceResultProps {
  id: number;
  name: string;
  price: number;
  place: string;
  image: string;
}

const SpaceCard: React.FC<SpaceResultProps> = ({
  id,
  name,
  price,
  place,
  image,
}) => {
  return (
    <div className="w-full px-12 py-5 md:w-1/2">
      <Link href={`/detail/${id}`}>
        <div className="hover:border-darkblue overflow-hidden rounded-xl border-2 border-transparent bg-white drop-shadow-md transition duration-200 ease-in-out">
          <Image
            alt="foto ruangan"
            src={"/office.png"}
            className="aspect-video w-full object-cover"
            width={500}
            height={500}
          />

          <div className="mx-5 items-center py-2">
            <p className="text-darkblue truncate px-2 py-3 text-xl font-extrabold">
              {name}
            </p>
            <div className="flex items-center px-2">
              <HiMiniMapPin size="2em" />
              <p className="px-2 text-xl text-gray-600">{place}</p>
            </div>

            <p className="p-2 text-xl font-semibold text-cyan-500">
              Rp {moneySplitter(price.toString())}/Jam
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpaceCard;
