import axios from "axios";
import { User } from "../models/userModel";

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get("https://reqres.in/api/users");

        if (response.status !== 200) {
            throw new Error("Failed to fetch recommended users");
        }

        const data = response.data.data;

        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
