import Head from "next/head";
import { useState } from "react";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { HERO_BACKGROUND_IMAGE, FILTER_OPTIONS, PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? "" : filter);
  };

  // Filter properties based on active filter
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.some(cat => 
          cat.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Find your favorite place here! The best prices for over 2 million properties worldwide." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Filter Properties</h2>
          <div className="flex flex-wrap gap-3">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeFilter ? `${filteredProperties.length} Properties with "${activeFilter}"` : 'All Properties'}
            </h2>
            <p className="text-gray-600">
              {filteredProperties.length} of {PROPERTYLISTINGSAMPLE.length} properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={`${property.name}-${index}`}
                {...property}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No properties found matching the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
  