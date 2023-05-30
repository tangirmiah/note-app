"use client";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Paper, Title, Button, Container } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthenticationTitle() {
  const { data: session } = useSession();
  const getEnv = () => {
    const res = process.env.GITHUB_ID;
    console.log(res);
  };
  if (session)
    return (
      <>
        <h1>
          <p>Welcome, {session.user?.name}</p>
        </h1>
        <Button onClick={() => signOut()} radius="xl">
          Log out
        </Button>
      </>
    );
  return (
    <Container onLoad={() => getEnv()}>
      <Paper radius="md" p="sm" withBorder>
        <GoogleLoginButton onClick={() => signIn("google")} />
        <GithubLoginButton onClick={() => signIn("github")} />
        <FacebookLoginButton onClick={() => signIn("facebook")} />
      </Paper>
    </Container>
  );
}
