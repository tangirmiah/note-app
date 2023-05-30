"use client"
import { GithubLoginButton } from "react-social-login-buttons"
import {
    Paper,
    createStyles,
    Title,
    rem,
    Button,
} from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react"
const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: "cover",
        backgroundImage:
            "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

export function AuthenticationTitle() {
    const { classes } = useStyles();
    const { data: session } = useSession()
    if (session) return (<><h1><p>Welcome, {session.user?.name}</p></h1>
        <Button onClick={() => signOut()} radius="xl">
            Log out
        </Button></>)
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to your NoteBook!
                </Title>
                {/* <GoogleLoginButton onClick={() => signIn()}>Log in with Google</GoogleLoginButton> */}
                <GithubLoginButton onClick={() => signIn()}>Log in with Github</GithubLoginButton>
            </Paper>
        </div>
    );
}
