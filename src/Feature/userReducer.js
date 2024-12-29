import { createSlice } from "@reduxjs/toolkit";

// Retrieve the stored user, isAuthenticated, and token expiry time from localStorage
const storedUser = localStorage.getItem("user");
const storedAuthStatus = localStorage.getItem("isAuthenticated");
const storedExpiry = localStorage.getItem("tokenExpiry");

const initialState = {
    user: storedUser ? JSON.parse(storedUser) : null, // Parse stored user object if it exists
    isAuthenticated: storedAuthStatus === 'true' ? true : false, // Convert stored value to boolean
    tokenExpiry: storedExpiry ? new Date(storedExpiry) : null, // Parse the expiry time if exists
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const expiryTime = new Date().getTime() + 60 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.tokenExpiry = new Date(expiryTime); // Set token expiry time

            // Save to localStorage
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("isAuthenticated", 'true');
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("tokenExpiry", new Date(expiryTime).toString());
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.tokenExpiry = null;

            // Remove from localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpiry");
        },
    },
});

// Export actions
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
