const DB_URL =
  "https://gogo43-menucontent-default-rtdb.europe-west1.firebasedatabase.app/.json";

export async function getMenu() {
  const res = await fetch(DB_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};
