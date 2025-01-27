# User Management Dashboard

A simple web application for managing user details. Users can view, add, edit, and delete user information using a mock backend API (JSONPlaceholder). Built with **React** and **Axios**.

---

## Features

- **View Users**: Fetch and display a list of users with details like ID, First Name, Last Name, Email, and Department.
- **Add User**: Simulate adding a new user via a form.
- **Edit User**: Fetch and update existing user details.
- **Delete User**: Simulate deleting a user.
- **Pagination**: Display users in a paginated list.
- **Error Handling**: Display error messages for failed API requests.
- **Responsive Design**: Works on all screen sizes.

---

## Technologies Used

- **Frontend**: React
- **HTTP Requests**: Axios
- **Styling**: CSS
- **Mock API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## API Interaction

The application interacts with the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API for user data. The following endpoints are used:

- **Fetch Users**: `GET /users`
- **Add User**: `POST /users`
- **Update User**: `PUT /users/:id`
- **Delete User**: `DELETE /users/:id`

**Note**: JSONPlaceholder is a mock API, so changes (add, edit, delete) are not persisted but are simulated.

---

## Functionality

### View Users
- Fetches and displays a list of users.
- Users are paginated (10 users per page).

### Add User
- Opens a form to input user details.
- Simulates adding a new user.

### Edit User
- Fetches the current user data and populates the form.
- Simulates updating the user.

### Delete User
- Simulates deleting a user.

### Error Handling
- Displays error messages if API requests fail.

---

## Challenges Faced

1. **API Limitations**:
   - JSONPlaceholder does not persist changes, so simulating CRUD operations required careful handling of state and API responses.

2. **Error Handling**:
   - Ensuring consistent error handling for failed API requests was challenging, especially when dealing with asynchronous operations.

3. **Responsive Design**:
   - Making the interface responsive while maintaining a clean layout required careful CSS adjustments.

---

Enjoy using the **User Management Dashboard**! 
