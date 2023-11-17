import SpaceForm from "@/app/components/Form/CoworkingSpaceForm";

export default function EditSpace() {
  const UploadEdit = () => {
    console.log("safe");
  };
  return (
    <SpaceForm
      title="Ubah Info Tempat"
      header="EDIT DATA TEMPAT"
      submitForm={UploadEdit}
    />
  );
}
