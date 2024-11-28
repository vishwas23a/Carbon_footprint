import React, { useState } from 'react';
import FloatingShape from './FloatingShape';
import prevButton from '../images/previous.png';
import { NavLink } from 'react-router-dom';

function FormPage() {
  const [formData, setFormData] = useState({
    bodyType: "",
    sex: "",
    diet: "",
    showerFrequency: "",
    heatingEnergy: "",
    transport: "",
    vehicleType: "",
    socialActivity: "",
    groceryBill: "",
    airTravelFrequency: "",
    vehicleDistance: "",
    wasteBagSize: "",
    wasteBagCount: "",
    tvPcHours: "",
    newClothes: "",
    internetHours: "",
    energyEfficiency: "",
    recycling: [],
    cookingWith: [],
  });

  const recyclingOptions = ["Paper", "Plastic", "Glass", "Metal"];
  const cookingOptions = ["Stove", "Oven", "Microwave", "Grill", "Airfryer"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelect = (e) => {
    const { options } = e.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({ ...formData, [e.target.name]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <>
      <div className="min-h-screen z-10 bg-gradient-to-br from-gray-800 via-green-900 to-emerald-900 relative flex justify-center items-center overflow-hidden">
        <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
        <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="50%" left="60%" delay={5} />
        <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
        <div>
          <NavLink to="/">
            <div className='absolute mt-14 cursor-pointer pl-20'>
              <img src={prevButton} className='h-10 w-10' />
            </div>
          </NavLink>
          <div className='w-screen flex justify-center py-10'>
            <form onSubmit={handleSubmit} className="w-[50%] z-20 p-8 space-y-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-3xl font-mono font-extrabold text-center text-green-700">Carbon Footprint Form</h2>

              {/* Body Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Body Type:</label>
                <select name="bodyType" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="underweight">Underweight</option>
                  <option value="normal">Normal</option>
                  <option value="overweight">Overweight</option>
                  <option value="obese">Obese</option>
                </select>
              </div>

              {/* Sex */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Sex:</label>
                <select name="sex" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Diet */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Diet:</label>
                <select name="diet" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="pescatarian">Pescatarian</option>
                  <option value="omnivore">Omnivore</option>
                </select>
              </div>

              {/* Shower Frequency */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Shower Frequency:</label>
                <input
                  type="number"
                  name="showerFrequency"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Times per week"
                />
              </div>

              {/* Heating Energy */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Heating Energy Source:</label>
                <select name="heatingEnergy" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="coal">Coal</option>
                  <option value="electricity">Electricity</option>
                  <option value="natural gas">Natural Gas</option>
                  <option value="wood">Wood</option>
                </select>
              </div>

              {/* Transport */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Transport:</label>
                <select name="transport" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="car">Car</option>
                  <option value="public_transport">Public Transport</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="walking">Walking</option>
                </select>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Vehicle Type:</label>
                <select name="vehicleType" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Social Activity */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Social Activity (hours per week):</label>
                <input
                  type="number"
                  name="socialActivity"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Grocery Bill */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Monthly Grocery Bill (in $):</label>
                <input
                  type="number"
                  name="groceryBill"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Air Travel Frequency */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Air Travel Frequency (times per year):</label>
                <input
                  type="number"
                  name="airTravelFrequency"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Vehicle Distance */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Monthly Vehicle Distance (in km):</label>
                <input
                  type="number"
                  name="vehicleDistance"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Waste Bag Size */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Waste Bag Size (liters):</label>
                <input
                  type="number"
                  name="wasteBagSize"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Waste Bag Count */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Weekly Waste Bag Count:</label>
                <input
                  type="number"
                  name="wasteBagCount"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* TV/PC Hours */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">TV/PC Usage (hours per day):</label>
                <input
                  type="number"
                  name="tvPcHours"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* New Clothes */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">New Clothes Purchased (items per month):</label>
                <input
                  type="number"
                  name="newClothes"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Internet Hours */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Internet Usage (hours per day):</label>
                <input
                  type="number"
                  name="internetHours"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Energy Efficiency */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Energy Efficiency Rating:</label>
                <select name="energyEfficiency" onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Recycling */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Recycling (Select multiple):</label>
                <select
                  name="recycling"
                  multiple
                  onChange={handleMultiSelect}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  {recyclingOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Cooking With */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Cooking With (Select multiple):</label>
                <select
                  name="cookingWith"
                  multiple
                  onChange={handleMultiSelect}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  {cookingOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
