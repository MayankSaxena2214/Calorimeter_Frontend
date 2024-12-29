import React from 'react';

const Calorie = () => {
  // Example food items with calorie content
  const foodItems = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 105 },
    { id: 3, name: 'Avocado', calories: 160 },
    { id: 4, name: 'Egg', calories: 78 },
    { id: 5, name: 'Chicken Breast (100g)', calories: 165 },
    { id: 6, name: 'Broccoli (100g)', calories: 34 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">What is a Calorie?</h2>

      <div className="text-gray-700 mb-6">
  <p className="mb-4 text-center mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
    A calorie is a unit of measurement for energy. It is commonly used to quantify the amount of energy provided by foods and drinks. Our bodies use this energy to perform various functions like breathing, digesting food, and exercising.
  </p>
  <p className="mb-4 text-center mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
    The number of calories you consume must match your energy needs to maintain a healthy body weight. Consuming more calories than your body needs can lead to weight gain, while consuming fewer calories can result in weight loss.
  </p>
  <p className="mb-4 text-center mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
    The calorie content of food varies based on its composition (e.g., proteins, fats, carbohydrates). For example, protein-rich foods like chicken provide a different number of calories than carb-rich foods like bread.
  </p>
</div>


      <h3 className="text-2xl font-semibold text-center mb-6">Examples of Food Items and Their Calorie Content</h3>

      {/* Food Items List */}
      <div className="flex flex-wrap gap-6 justify-center">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{item.name}</h4>
              <p className="text-gray-700">Calories: {item.calories} kcal</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calorie;
