import getAllSpace, { CoworkingSpace } from "@/app/lib/apiCalls/getAllSpace";
import SpaceCard from "@/app/components/SpaceCard";

export default async function Explore({
  searchParams,
}: {
  searchParams: { search: string | undefined };
}) {
  const keyWord = searchParams.search ? searchParams.search : null;
  const [spaceResult, pagination] = await getAllSpace(keyWord);

  return (
    <>
      {spaceResult ? (
        spaceResult.length !== 0 ? (
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
          })
        ) : (
          <p className="m-8 w-full text-center text-lg text-black">
            Tidak ada Coworking Space yang cocok dengan kata kunci
          </p>
        )
      ) : (
        <div className="m-8 w-full text-center text-lg text-black">
          Server Unreachable!
        </div>
      )}
    </>
  );
}
