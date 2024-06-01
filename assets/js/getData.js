export async function getData() {
  const res = await fetch("https://raw.githubusercontent.com/jarher/fourCardFeatureSection/main/data.json");
  const data = await res.json();
  return data;
}
