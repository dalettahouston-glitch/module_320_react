export async function getAllStarships() {
  const response = await fetch("https://swapi.dev/api/starships/");
  if (!response.ok) throw new Error("Failed to fetch starships");
  const data = await response.json();
  return data.results; // ← THIS makes sure you return the array
}








// export async function getAllStarships() {
//   const response = await fetch("https://swapi.dev/api/starships/");
//   if (!response.ok) throw new Error("Failed to fetch starships");
//   return response.json();
// }