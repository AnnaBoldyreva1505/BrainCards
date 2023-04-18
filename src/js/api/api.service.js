const API_URL = 'https://imaginary-invited-gull.glitch.me';

const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api/category`);
  
    if (response.status === 200) {
      const categories = await response.json();
      return categories;
    } else {
      const error = await response.json();
      throw error; //throw - для прерывания работы функции
    }
  } catch (error) {
    return { error };
  }
};

export default fetchCategories;
