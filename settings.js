document.addEventListener("DOMContentLoaded", function () {
    const settingsForm = document.getElementById("settings-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const userTable = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    
    const API_URL = "https://gunplasettings-32e6.restdb.io/rest/usersettings";
    const API_KEY = "67a81224600a703c65de5be6"; 
    
    let editingUserId = null;  // Stores the ID of the user being edited

    function loadSettings() {
        fetch(API_URL, {
            headers: { "x-apikey": API_KEY }
        })        
        .then(response => response.json())
        .then(data => {
            userTable.innerHTML = "";

            data.forEach(user => {
                const row = userTable.insertRow();
                const usernameCell = row.insertCell(0);
                const emailCell = row.insertCell(1);
                const actionCell = row.insertCell(2);

                usernameCell.textContent = user.username || "N/A";
                emailCell.textContent = user.email || "N/A";

                // Edit Button
                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.classList.add("edit-btn");
                editButton.addEventListener("click", () => editUser(user));
                actionCell.appendChild(editButton);

            });
        })
        .catch(error => console.error("Error loading settings:", error));
    }

    function saveSettings(event) {
        event.preventDefault();
        const userData = {
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        if (!userData.username || !userData.email || !userData.password) {
            alert("All fields are required!");
            return;
        }

        if (editingUserId) {
            updateUser(editingUserId, userData);
        } else {
            fetch(API_URL, {
                method: "POST",
                headers: {
                    "x-apikey": API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(() => {
                alert("Settings saved successfully!");
                settingsForm.reset();
                editingUserId = null;
                loadSettings();
            })
            .catch(error => console.error("Error saving settings:", error));
        }
    }

    function editUser(user) {
        usernameInput.value = user.username;
        emailInput.value = user.email;
        passwordInput.value = ""; // Clear password field for security
        editingUserId = user._id;
    }

    function updateUser(userId, updatedData) {
        fetch(`${API_URL}/${userId}`, {
            method: "PUT",
            headers: {
                "x-apikey": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then(() => {
            alert("User updated successfully!");
            settingsForm.reset();
            editingUserId = null;
            loadSettings();
        })
        .catch(error => console.error("Error updating user:", error));
    }

    function deleteUser(userId) {
        fetch(`${API_URL}/${userId}`, {
            method: "DELETE",
            headers: { "x-apikey": API_KEY }
        })
        .then(() => {
            alert("User deleted successfully!");
            loadSettings();
        })
        .catch(error => console.error("Error deleting user:", error));
    }

    settingsForm.addEventListener("submit", saveSettings);
    loadSettings();
});
