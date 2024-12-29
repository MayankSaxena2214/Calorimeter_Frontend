import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setFoods } from '../../Feature/foodReducer';
import { server } from '../../main';
import { IoFilter} from "react-icons/io5"
import { useNavigate } from 'react-router-dom';

const MyFood = () => {
    const navigate=useNavigate();
    const {isAuthenticated}=useSelector((state)=>state.auth)
  const { foods, totalFoods,    totalKcal} = useSelector((state) => state.foods); // Access foods and totalFoods from Redux
  const [loading, setLoading] = useState(false);
  const [newFood, setNewFood] = useState({ foodItem: '', mealType: 'Breakfast' });
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const dispatch = useDispatch();
  const [search,setSearch]=useState("");
  const [showFilter,setShowFilter]=useState(false);
  const [date,setDate]=useState("");
 
      useEffect(() => {
          if (!isAuthenticated) {
            navigate('/');
          }
        }, [isAuthenticated, navigate]); 
  const toggleFilter=()=>{
    setShowFilter(!showFilter);
  }
  // Fetch food entries
  const fetchFoodEntries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/v1/food/my-food?search=${search}&date=${date}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      dispatch(setFoods({ foods: data.foods, totalFoods: data.totalFoodEntry }));

    } catch (error) {
      console.error('Error fetching food entries:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add food entry
  const addFoodEntry = async () => {
    try {
      const { data } = await axios.post(
        `${server}/api/v1/food/create`,
        newFood,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      alert(data.message);
      fetchFoodEntries();
      setIsModalOpen(false); // Close modal after adding
    } catch (error) {
      console.error('Error adding food entry:', error);
    }
  };

  // Delete food entry
  const deleteFoodEntry = async (foodEntryId) => {
    try {
      const { data } = await axios.delete(`${server}/api/v1/food/delete/${foodEntryId}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      alert(data.message);
      fetchFoodEntries();
    } catch (error) {
      console.error('Error deleting food entry:', error);
    }
  };

  useEffect(() => {
    fetchFoodEntries();
  }, [search,date]);

  return (
    <div className="container mx-auto p-4" style={{
        minHeight:"60vh"
    }}>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">My Food</h1>

      {/* Search Bar and Add Button */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          value={search}
          onChange={((e)=>setSearch(e.target.value))}
          placeholder="Search Food..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mr-4"
        />
        <IoFilter onClick={toggleFilter} className='h-10 w-10 rounded-xl px-1 py-1 border-black-400 mx-2 border-2'/>
        <button className='bg-green-400 rounded-2xl p-3 px-4 mx-2 text-white font-bold h-full'>Total Food: {totalFoods}</button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add New
        </button>
      </div>
      {
        showFilter && <div className='flex justify-center gap-3 items-center '>
        <select className='p-2 border-2 border-blue-400 rounded-xl px-4' name="" id="" onChange={(e)=>setSearch(e.target.value)}>
            <option value="" >Select option</option>
            <option value="Breakfast"> Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Others">Others</option>
        </select>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className='p-2 h-full border-blue-400 border-2 rounded-2xl' />
        <button className='bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white p-2 h-full px-4 rounded-2xl border-2' onClick={()=>{
            setSearch("");
            setDate("");
        }}>Reset</button>
      </div>
      }

      {/* Data List */}
      <div className='font-bold text-2xl m-auto flex justify-center mb-2 mt-2'>Total kcal { totalKcal} </div>
      <ul className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          foods.map((food) => (
            <li
              key={food._id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <span>
                <span className='font-bold'>{food.foodItem}</span> - <span className='text-red-400'>{food.mealType}</span> - <span className='text-green-400'> {food.calories}  kcal</span>
              </span>
              <button
                onClick={() => deleteFoodEntry(food._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
      

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Food</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Food Item"
                value={newFood.foodItem}
                onChange={(e) => setNewFood({ ...newFood, foodItem: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <select
                value={newFood.mealType}
                onChange={(e) => setNewFood({ ...newFood, mealType: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Other">Other</option>
              </select>
              <button
                onClick={addFoodEntry}
                className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add Food
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-2 px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFood;
