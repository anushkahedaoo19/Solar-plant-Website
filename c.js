function calculateBill() {
  const units = document.getElementById("units").value;
  const result = document.getElementById("result");

  if (!units || units <= 0) {
    result.innerHTML = "⚠️ Please enter valid units.";
    return;
  }

  const normal = units * 6;
  const solar = units * 1.5;
  const savings = normal - solar;

  result.innerHTML = `
    <p>💡 Normal Bill: ₹${normal.toFixed(2)}</p>
    <p>🌞 With Solar: ₹${solar.toFixed(2)}</p>
    <p>🎉 You Save: ₹${savings.toFixed(2)} per month!</p>
  `;
}
