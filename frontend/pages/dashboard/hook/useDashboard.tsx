import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../../store/usersSlice";
import { fetchUsers } from "../../../repositories/userRepositories";
import { RootState } from "../../../store/store";

const useDashboard = () => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        const getUsers = async () => {
            const { users, totalPages } = await fetchUsers(page);
            if (page === totalPages) {
                setHasMore(false);
            }

            const filteredUsers = users.filter(
                (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
            );

            dispatch(setUsers({ users: filteredUsers, page }));
        };

        getUsers();
    }, [dispatch, page]);

    const handleOnLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return {
        hasMore,
        users,
        onLoadMore: handleOnLoadMore,
    };
};

export default useDashboard;
