import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../../store/usersSlice";
import { fetchUsers } from "../../../repositories/userRepositories";
import { RootState } from "../../../store/store";

const useDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();
            const filteredUsers = users.filter(
                (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
            );

            dispatch(setUsers(filteredUsers));
        };

        getUsers();
    }, [dispatch]);

    return {
        users,
    };
};

export default useDashboard;
