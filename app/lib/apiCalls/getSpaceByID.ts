export interface SpaceResultDetail {
  message: string;
  coworking_space: {
    name: string;
    description: string;
    price: string;
    capacity: number;
    status: string;
    owner: {
      user: {
        phone_number: string;
      };
    };
    location: {
      location_id: number;
      address: string;
      latitude: number;
      longitude: number;
    };
    coworking_space_images: {
      image_url: string;
    }[];
    coworking_space_facilities: {
      facility: {
        facility_id: number;
        name: string;
        description: string;
      };
    }[];
  };
}

export default function getSpaceByID(id: number): SpaceResultDetail {
  const result = {
    message: "Coworking space detail retrieved successfully",
    coworking_space: {
      name: "Coworking Space Dummy 3",
      description: "lorem ipsum",
      price: "150000",
      capacity: 15,
      status: "APPROVED",
      owner: {
        user: {
          phone_number: "085712345670",
        },
      },
      location: {
        location_id: 4,
        address: "Bandung",
        latitude: -6.9254861,
        longitude: 107.7743647,
      },
      coworking_space_images: [
        {
          image_url: "/dummyoffice.jpeg",
        },
        {
          image_url: "/office.png",
        },
        {
          image_url: "/hands.png",
        },
      ],
      coworking_space_facilities: [
        {
          facility: {
            facility_id: 1,
            name: "WiFi",
            description:
              "Koneksi internet nirkabel yang cepat dan stabil untuk kebutuhan penyewa",
          },
        },
        {
          facility: {
            facility_id: 10,
            name: "Ruang Tunggu",
            description: "Area yang nyaman untuk menunggu",
          },
        },
        {
          facility: {
            facility_id: 11,
            name: "Parkir Mobil",
            description: "Tempat parkir yang tersedia untuk mobil",
          },
        },
        {
          facility: {
            facility_id: 12,
            name: "Parkir Motor",
            description: "Tempat parkir yang tersedia untuk motor",
          },
        },
      ],
    },
  };

  return result;
}
