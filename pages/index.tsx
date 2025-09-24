import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to ALX Listing App
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Cozy Apartment"
            description="A lovely apartment in the city center."
            imageUrl="/assets/placeholder.jpg"
          />
          <Card
            title="Beach House"
            description="Enjoy the ocean view with this beach house."
            imageUrl="/assets/placeholder.jpg"
          />
          <Card
            title="Mountain Cabin"
            description="Relax in a quiet cabin near the mountains."
            imageUrl="/assets/placeholder.jpg"
          />
        </div>

        <div className="flex justify-center mt-8">
          <Button
            label="Explore More"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </main>
    </div>
  );
}
