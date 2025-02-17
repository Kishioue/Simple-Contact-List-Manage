// Define the contacts array to store the list of contacts.
let contacts = [];

// Function to add a new contact to the contacts array.
function addContact() {
    const name = prompt("Enter contact's name:");
    if (name !== null && name !== "") {
        const phone = prompt("Enter contact's phone number:");
        if (phone !== null && phone !== "") {
            contacts.push({ name, phone });
            console.log(`Contact ${name} added successfully.`);
        } else {
            console.log("Please enter a phone number.");
        }
    } else {
        console.log("Please enter a name.");
    }
}

// Function to view all contacts in the list.
function viewContacts() {
    if (contacts.length === 0) {
        console.log("No contacts available.");
    } else {
        console.log("Contact List:");
        contacts.forEach((contact) => {
            console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
        });
    }
}

// Function to remove a contact from the list by name.
function removeContact() {
    const name = prompt("Enter contact's name to remove:");
    if (name !== null && name !== "") {
        const index = contacts.findIndex((contact) => contact.name === name);
        if (index !== -1) {
            contacts.splice(index, 1);
            console.log(`Contact ${name} removed successfully.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    } else {
        console.log("Please enter a name.");
    }
}

// Function to search for a contact by name.
function searchContact() {
    const name = prompt("Enter contact's name to search:");
    if (name !== null && name !== "") {
        const contact = contacts.find((contact) => contact.name === name);
        if (contact !== undefined) {
            console.log(`Contact Found: Name: ${contact.name}, Phone: ${contact.phone}`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    } else {
        console.log("Please enter a name.");
    }
}

// Function to display the menu options.
function displayMenu() {
    console.log("Menu Options:");
    console.log("1. Add a new contact");
    console.log("2. View all contacts");
    console.log("3. Remove a contact");
    console.log("4. Search for a contact");
    console.log("5. Exit");
}

// Main program logic.
function main() {
    while (true) {
        displayMenu();
        const choice = prompt("Enter your choice:");
        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                viewContacts();
                break;
            case "3":
                removeContact();
                break;
            case "4":
                searchContact();
                break;
            case "5":
                console.log("Good Bye");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// Call the main function to start the program.
main();