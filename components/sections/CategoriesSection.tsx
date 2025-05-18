import React from "react";

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      name: "Ciclines",
      subcategories: ["Gadgets", "Accessories"],
    },
    {
      name: "Books",
      subcategories: ["Utensils", "Beauty products"],
    },
    {
      name: "Frames",
      subcategories: [],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              {category.subcategories.length > 0 && (
                <ul className="space-y-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="text-gray-600">
                      • {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
