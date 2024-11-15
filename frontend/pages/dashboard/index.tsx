import { useDispatch, useSelector } from "react-redux";
import useDashboard from "./hook/useDashboard";
import { RootState } from "../../store/store";
import { setEmailMask } from "../../store/emailSlice";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Users = () => {
    const { hasMore, users, onLoadMore } = useDashboard();
    const dispatch = useDispatch();
    const maskEmail = useSelector((state: RootState) => state.emailMask);

    const handleOnMaskEmail = (userId: string) => {
        dispatch(setEmailMask(userId));
    };

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {users.length > 0 ? (
                    users.map((user) => {
                        const isEmailMasked = maskEmail[user.id] ?? true;

                        return (
                            <Card key={user.id} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 140 }}
                                    image={user.avatar}
                                    alt={`${user.first_name} ${user.last_name} Avatar`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {user.first_name} {user.last_name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        {isEmailMasked ? "*****@reqres.in" : user.email}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleOnMaskEmail(user.id)}>
                                        {isEmailMasked ? "Show" : "Hide"}
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })
                ) : (
                    <p>No users</p>
                )}
                {
                    <Button onClick={onLoadMore} disabled={!hasMore}>
                        Load More
                    </Button>
                }
            </div>
        </div>
    );
};

export default Users;
