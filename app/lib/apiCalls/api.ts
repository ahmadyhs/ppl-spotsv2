import axios from "axios";

// default api config
export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: { "Content-Type": "application/json" },
});
