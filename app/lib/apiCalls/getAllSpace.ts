import { cache } from "react";
import api from "./api";

export const revalidate = 60 * 30;

export interface SpaceResult {
  id: number;
  name: string;
  price: number;
  place: string;
  images: string[];
}

const getAllSpace = cache(() => {
  // const {id, name, price, place, image} = await api.get('/coworking-spaces')

  return [
    {
      name: "Coworking Space Dummy",
      price: "275000",
      capacity: 30,
      status: "APPROVED",
      location: {
        location_id: 2,
        space_id: 2,
        address: "Jakarta",
        latitude: -6.9254862,
        longitude: 107.7743648,
      },
      coworking_space_images: [
        {
          image_url:
            "https://api.spotscoworking.live/static/coworking_space/87628_1684157013846.jpeg",
        },
      ],
    },
    {
      name: "Coworking Space Dummy 3",
      price: "150000",
      capacity: 15,
      status: "APPROVED",
      location: {
        location_id: 4,
        space_id: 4,
        address: "Bandung",
        latitude: -6.9254861,
        longitude: 107.7743647,
      },
      coworking_space_images: [
        {
          image_url:
            "https://api.spotscoworking.live/static/coworking_space/27094_1684157456092.jpeg",
        },
      ],
    },
  ];
});

export default getAllSpace;
