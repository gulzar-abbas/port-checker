document.getElementById("port-checker-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const ip = document.getElementById("ip").value;
  const port = document.getElementById("port").value;
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "Checking...";

  try {
    const response = await fetch(`https://api.portchecker.io/v1/?host=${ip}&port=${port}`);
    const data = await response.json();

    if (data && data.status === "success") {
      resultDiv.textContent = `✅ Port ${port} is OPEN on ${ip}`;
    } else {
      resultDiv.textContent = `❌ Port ${port} is CLOSED on ${ip}`;
    }
  } catch (error) {
    resultDiv.textContent = `⚠️ Error checking port: ${error.message}`;
  }
});
