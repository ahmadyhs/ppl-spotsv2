import OwnerInfoForm from "@/app/components/Form/OwnerCredentialForm";

export default function EditOwnerCredential() {
  const fetched: boolean = true;

  return (
    <section className="col-span-8 max-h-screen bg-white md:col-span-6">
      <title>Update Data Diri</title>
      <OwnerInfoForm />
    </section>
  );
}
