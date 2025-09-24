import Head from "next/head";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";


import React from "react";

interface PropertyCardProps {
  name: string;
  price: string;
  rating: number;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, rating, image }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <p className="text-yellow-500 font-medium">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-6">
        <section className="text-center mb-10">
          <h1 className="text-3xl font-bold text-center mb-6">
          Find your favorite place here!” and “The best prices for over 2 million properties worldwide.
        </h1>
        </section>

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
