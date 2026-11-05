import { createContext } from "react-router-dom";

const UserContext = createContext({
  loggesInUser: "Default User",
});

export default UserContext;
