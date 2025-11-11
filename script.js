 function showCreateAccount() {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("createAccountPage").style.display = "block";
    }

    function showLogin() {
      document.getElementById("createAccountPage").style.display = "none";
      document.getElementById("loginPage").style.display = "block";
    }

    function createAccount() {
      const newEmail = document.getElementById("newEmail").value.trim();
      const newPassword = document.getElementById("newPassword").value.trim();
      const createMsg = document.getElementById("createMsg");

      if (!newEmail || !newPassword) {
        createMsg.textContent = "Please fill in both fields.";
        return;
      }

      localStorage.setItem("userEmail", newEmail);
      localStorage.setItem("userPassword", newPassword);
      createMsg.style.color = "lightgreen";
      createMsg.textContent = "Account created successfully! You can now log in.";
      setTimeout(showLogin, 1500);
    }

    function login() {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
      } else {
        errorMsg.textContent = "Invalid email or password!";
      }
    }

    function logout() {
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("loginPage").style.display = "block";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("errorMsg").textContent = "";
    }

    const recipes = {
      "Espresso": {
        ingredients: ["2 tbsp finely ground coffee", "½ cup hot water"],
        video: "https://www.youtube.com/embed/-lDtaMpvUAw"
      },
      "Latte": {
        ingredients: ["1 shot espresso", "¾ cup steamed milk", "Foamed milk on top"],
        video: "https://www.youtube.com/embed/6kQHSaK57fE"
      },
      "Cold Brew": {
        ingredients: ["1 cup coarsely ground coffee", "4 cups cold water", "Ice cubes"],
        video: "https://www.youtube.com/embed/3v3nM1XK6aY"
      },
      "Americano": {
        ingredients: ["1 shot espresso", "Hot water to fill the cup"],
        video: "https://www.youtube.com/embed/lZz3Z6C6VvQ"
      },
      "Hot Chocolate": {
        ingredients: ["2 tbsp cocoa powder", "1 cup milk", "1 tbsp sugar", "Whipped cream (optional)"],
        video: "https://www.youtube.com/embed/nL8X4C5A2iI"
      }
    };

    let currentDrink = "";

    function showIngredients(drinkName) {
      const modal = document.getElementById("ingredientModal");
      const title = document.getElementById("drinkTitle");
      const list = document.getElementById("ingredientList");
      const video = document.getElementById("videoFrame");
      const orderSection = document.getElementById("orderSection");
      orderSection.style.display = "none";
      currentDrink = drinkName;

      title.textContent = drinkName;
      list.innerHTML = "";

      recipes[drinkName].ingredients.forEach(i => {
        const li = document.createElement("li");
        li.textContent = "• " + i;
        list.appendChild(li);
      });

      video.src = recipes[drinkName].video + "?autoplay=1&rel=0";
      modal.style.display = "block";
    }

    function showOrder() {
      document.getElementById("orderSection").style.display = "block";
    }

    function placeOrder() {
      const address = document.getElementById("orderAddress").value.trim();
      if (!address) {
        alert("Please enter your address before placing the order.");
        return;
      }
      alert("Thank you! Your order for " + currentDrink + " will be delivered to " + address + ".");
      closeModal();
    }

    function closeModal() {
      document.getElementById("ingredientModal").style.display = "none";
      document.getElementById("videoFrame").src = "";
      document.getElementById("orderAddress").value = "";
      document.getElementById("orderSection").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("ingredientModal");
      if (event.target == modal) {
        closeModal();
      }
    }