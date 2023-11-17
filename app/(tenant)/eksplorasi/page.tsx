import { Suspense } from "react";
import getAllSpace from "@/app/lib/apiCalls/getAllSpace";
import SpaceCard from "@/app/components/SpaceCard";
import ExploreLoadingCard from "./loading";

export default function Explore() {
  const spaceResult = getAllSpace();

  return (
    <div className="flex flex-wrap">
      {/* {spaceResult && (spaceResult.length === 0) && (keyWord !== '') &&
        <p className='text-neutral-800 text-center text-xl mt-6'>
          Tidak ada Coworking Space yang cocok dengan kata kunci
        </p>} */}

      <Suspense fallback={<ExploreLoadingCard />}>
        {spaceResult &&
          spaceResult.map((space: any) => {
            return (
              <SpaceCard
                key={space.location.space_id}
                id={space.location.space_id}
                name={space.name}
                price={space.price}
                place={space.location.address}
                image={space.coworking_space_images[0].image_url}
              />
            );
          })}
      </Suspense>

      {/* {isFetchFailed && 
      <div className='text-black text-center'>Server Unreachable</div>} */}
    </div>
  );
}
