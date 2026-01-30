const API_URL = import.meta.env.VITE_API_URL;

export const fetchInventory = async (params) => {
  const query = new URLSearchParams(params);
  const res = await fetch(`${API_URL}/search?${query}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
};
