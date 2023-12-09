"use client";

import SpaceTable from "@/app/components/Table/SpaceTable";

export default function SpaceOwner() {
  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Coworking Space Anda</title>

      <div className="h-1/12 flex justify-center">
        <h1>DATA COWORKING SPACE ANDA</h1>
      </div>

      <SpaceTable userType="OWNER" />
    </section>
  );
}
