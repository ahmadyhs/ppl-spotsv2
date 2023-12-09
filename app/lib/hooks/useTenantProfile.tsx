import { ProfileType } from "@/app/(tenant)/profile/page";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useTenantProfile(
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>,
) {
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function getProfile() {
      try {
        const response = await axios("/lib/apiCalls/tenantProfile", {
          signal: controller.signal,
        });

        isMounted && setProfile(response.data.tenant);
      } catch (error) {
        console.log("err");
      }
    }

    getProfile();
    console.log("tes");

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
}
