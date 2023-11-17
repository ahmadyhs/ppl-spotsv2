import SearchBar from "@/app/components/Form/Search";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Eksplorasi</title>

      <h1>Cari Workspace</h1>

      <SearchBar />
      {children}
    </>
  );
}
