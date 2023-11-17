import { Suspense } from "react";
import TenanttProfileForm from "@/app/components/Form/TenantProfile";
import TenantProfileLoadingCard from "./loading";

export default function Profile() {
  const isDataFetched = true;
  const picture = null;
  const firstName = "tes";
  const lastName = "satu";
  const email = "@gmail";
  const phoneNumber = 14022;

  return (
    <>
      <Suspense fallback={<TenantProfileLoadingCard />}>
        {isDataFetched && (
          <TenanttProfileForm
            pictuteURLProps={undefined}
            firstNameProps={
              "Namajalksdjflkasdlfkjalksdjfljasdlkjsjglkajsdlkfaskldlnascvnl"
            }
            lastNameProps={"Saya"}
            emailProps={"@gmail"}
            phoneNumberProps={14022}
          />
        )}
      </Suspense>
    </>
  );
}
