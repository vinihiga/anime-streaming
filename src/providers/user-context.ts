import User from "@/datasource/models/User";
import { createContext } from "react";

const UserContext = createContext<User | null>(null);

export default UserContext;
