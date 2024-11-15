import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useState } from "react";
import useDashboard from "./hook/useDashboard";

const Users = () => {
    const { users } = useDashboard();
    const [maskEmail, setMaskEmail] = useState<{ [key: string]: boolean }>({});

    const handleOnMaskEmail = (userId: string) => {
        setMaskEmail((prev) => {
            const isEmailMasked: boolean = prev[userId] ?? true;

            return {
                ...prev,
                [userId]: !isEmailMasked,
            };
        });
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
            </div>
        </div>
    );
};

export default Users;
