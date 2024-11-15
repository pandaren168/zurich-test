import axios from "axios";
import { User } from "../models/userModel";

interface UsersResponse {
    users: User[];
    totalPages: number;
}

export const fetchUsers = async (page: number): Promise<UsersResponse> => {
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);

        if (response.status !== 200) {
            throw new Error("Failed to fetch recommended users");
        }

        return { users: response.data.data, totalPages: response.data.total_pages };
    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            users: [],
            totalPages: 1,
        };
    }
};
