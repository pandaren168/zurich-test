import { useEffect, useState } from "react";
import { User } from "../../../models/userModel";
import { fetchUsers } from "../../../repositories/userRepositories";

const useDashboard = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();
            const filteredUsers = users.filter(
                (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
            );

            setUsers(filteredUsers);
        };

        getUsers();
    }, []);

    return {
        users,
    };
};

export default useDashboard;
