import SpaceForm from "@/app/components/Form/CoworkingSpaceForm";

export default function AddSpace() {
  const UploadEdit = () => {
    console.log("safe");
  };
  return (
    <>
      <SpaceForm
        title="Tambah Coworking Space"
        header="TAMBAH COWORKING SPACE"
        submitForm={UploadEdit}
      />
    </>
  );
}
