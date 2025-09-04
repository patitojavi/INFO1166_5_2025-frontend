export const auth = {
  isLoggedIn: () => localStorage.getItem("auth") === "true",
  login: () => localStorage.setItem("auth", "true"),
  logout: () => localStorage.removeItem("auth"),
};
