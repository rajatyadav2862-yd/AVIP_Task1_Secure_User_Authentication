const output = document.getElementById("output");

function show(data) {
  output.textContent = JSON.stringify(data, null, 2);
}

async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
}

document.getElementById("registerForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const data = await request("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("regName").value,
        email: document.getElementById("regEmail").value,
        password: document.getElementById("regPassword").value
      })
    });

    localStorage.setItem("token", data.token);
    show(data);
  } catch (error) {
    show(error);
  }
});

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const data = await request("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
      })
    });

    localStorage.setItem("token", data.token);
    show(data);
  } catch (error) {
    show(error);
  }
});

document.getElementById("profileBtn").addEventListener("click", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return show({ success: false, message: "Please register or login first." });
  }

  try {
    const data = await request("/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` }
    });
    show(data);
  } catch (error) {
    show(error);
  }
});