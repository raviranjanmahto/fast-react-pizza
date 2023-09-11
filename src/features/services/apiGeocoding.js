const API_URL = import.meta.env.VITE_GEO_API;

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `${API_URL}?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
