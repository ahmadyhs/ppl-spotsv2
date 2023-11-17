export interface TenantTransactionHistory {
  message: string;
  bookings: {
    booking_id: string;
    date: string;
    coworking_space: {
      name: string;
    };
    payment: {
      amount?: string;
      method?: string;
      status?: string;
    };
  }[];
}

export default function getTenantTransactionList(): TenantTransactionHistory {
  return {
    message: "Booking history retrieved successfully",
    bookings: [
      {
        booking_id: "52d60b8c-edb2-4c40-9982-1f87af7910ef",
        date: "2023-05-17",
        coworking_space: {
          name: "Coworking Space Dummy",
        },
        payment: {
          amount: "275000",
          method: "bank_transfer",
          status: "settlement",
        },
      },
      {
        booking_id: "95c92fa9-fee7-4571-a352-e78093d4b1b9",
        date: "2023-05-18",
        coworking_space: {
          name: "Coworking Space Dummy",
        },
        payment: {
          amount: "275000",
          method: "bank_transfer",
          status: "settlement",
        },
      },
    ],
  };
}
