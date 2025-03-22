import User from "@/datasource/User";
import { createContext } from "react";

const UserContext = createContext<User | null>(null);

export default UserContext;
