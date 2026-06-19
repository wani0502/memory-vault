import UploadZone from "@/components/UploadZone";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center pt-20">
      <h1 className="text-5xl font-bold mb-10">
        Upload Memory
      </h1>

      <UploadZone />
    </main>
  );
}