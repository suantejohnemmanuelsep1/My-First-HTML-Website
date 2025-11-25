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
      const msg = document.getElementById("createMsg");

      if (!newEmail || !newPassword) {
        msg.textContent = "Please fill in both fields.";
        return;
      }

      localStorage.setItem("userEmail", newEmail);
      localStorage.setItem("userPassword", newPassword);

      msg.style.color = "lightgreen";
      msg.textContent = "Account created!";
      setTimeout(showLogin, 1500);
    }

    function login() {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
      } else {
        document.getElementById("errorMsg").textContent = "Invalid email or password!";
      }
    }

    function logout() {
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("loginPage").style.display = "block";
    }

    function openContact() {
      document.getElementById("contactModal").style.display = "block";
    }

    function closeContact() {
      document.getElementById("contactModal").style.display = "none";
    }

    const recipes = {
  "Espresso": { ingredients: ["2 tbsp finely ground coffee", "½ cup hot water"], video: "https://www.youtube.com/embed/jLRv1X0z9A4" },
  "Latte": { ingredients: ["1 shot espresso", "¾ cup steamed milk", "Foamed milk on top"], video: "https://www.youtube.com/embed/V_9eKD3GBkE" },
  "Cold Brew": { ingredients: ["1 cup coarsely ground coffee", "4 cups cold water", "Ice cubes"], video: "https://www.youtube.com/embed/nL5kknzVXkY" },
  "Americano": { ingredients: ["1 shot espresso", "Hot water to fill the cup"], video: "https://www.youtube.com/embed/qjl0-HjdJrQ" },
  "Hot Chocolate": { ingredients: ["2 tbsp cocoa powder", "1 cup milk", "1 tbsp sugar", "Whipped cream (optional)"], video: "https://www.youtube.com/embed/vJwVKN9M6Yw" },
  "Affogato": { ingredients: ["1 scoop vanilla gelato", "1 shot hot espresso"], video: "https://www.youtube.com/embed/4VlvtJbmfpA" },
  "Cappuccino": { ingredients: ["1 shot espresso", "½ cup steamed milk", "½ cup milk foam", "Cocoa powder on top"], video: "https://www.youtube.com/embed/qjl0-HjdJrQ" },
  "Macchiato": { ingredients: ["1 shot espresso", "1 tbsp steamed milk", "1 tbsp milk foam"], video: "https://www.youtube.com/embed/V_9eKD3GBkE" },
  "Mocha": { ingredients: ["1 shot espresso", "¾ cup steamed milk", "2 tbsp chocolate sauce", "Whipped cream"], video: "https://www.youtube.com/embed/vJwVKN9M6Yw" },
  "Flat White": { ingredients: ["2 shots espresso", "¾ cup steamed milk", "Thin layer of milk foam"], video: "https://www.youtube.com/embed/qjl0-HjdJrQ" }
};

    const merchandise = {
      "T-Shirt": { description: "Premium cotton t-shirt with Velvet Brew logo.", price: "₱450" },
      "Coffee Mug": { description: "Ceramic Velvet Brew mug. Perfect for coffee lovers.", price: "₱250" },
      "Tumbler": { description: "Stainless steel vacuum tumbler (16oz).", price: "₱350" },
      "Tote Bag": { description: "A clean and durable everyday tote bag for coffee lovers.", price: "₱695" }
    };

    let currentItem = "";
    let currentItemType = "";

    function openMerchandise() { document.getElementById("merchandiseModal").style.display = "block"; }
    function closeMerchandise() { document.getElementById("merchandiseModal").style.display = "none"; }

    function showMerchandiseDetails(itemName) {
      closeMerchandise();
      const modal = document.getElementById("ingredientModal");
      const title = document.getElementById("drinkTitle");
      const list = document.getElementById("ingredientList");
      const video = document.getElementById("videoFrame");
      const orderSection = document.getElementById("orderSection");

      orderSection.style.display = "none";
      currentItem = itemName;
      currentItemType = "merch";

      title.textContent = itemName;
      list.innerHTML = "";

      const item = merchandise[itemName];

      const li = document.createElement("li");
      li.textContent = item.description;
      li.style.listStyle = "none";
      list.appendChild(li);

      const price = document.createElement("li");
      price.textContent = "Price: " + item.price;
      price.style.listStyle = "none";
      price.style.fontWeight = "bold";
      price.style.marginTop = "10px";
      list.appendChild(price);

      video.style.display = "none";
      modal.style.display = "block";
    }

    function showIngredients(drinkName) {
      const modal = document.getElementById("ingredientModal");
      const title = document.getElementById("drinkTitle");
      const list = document.getElementById("ingredientList");
      const video = document.getElementById("videoFrame");
      const orderSection = document.getElementById("orderSection");

      list.innerHTML = "";
      orderSection.style.display = "none";

      currentItem = drinkName;
      currentItemType = "drink";

      title.textContent = drinkName;

      recipes[drinkName].ingredients.forEach(i => {
        const li = document.createElement("li");
        li.textContent = "• " + i;
        list.appendChild(li);
      });

      video.src = recipes[drinkName].video;
      video.style.display = "block";

      modal.style.display = "block";
    }

    function showOrder() {
      document.getElementById("orderSection").style.display = "block";
    }

    function placeOrder() {
      const address = document.getElementById("orderAddress").value.trim();

      if (!address) {
        alert("Please enter your address.");
        return;
      }

      const type = currentItemType === "drink" ? "order" : "purchase";

      alert(`Thank you! Your ${type} for ${currentItem} will be delivered to ${address}.`);

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
      const merch = document.getElementById("merchandiseModal");
      const contact = document.getElementById("contactModal");

      if (event.target == modal) closeModal();
      if (event.target == merch) closeMerchandise();
      if (event.target == contact) closeContact();
    }
