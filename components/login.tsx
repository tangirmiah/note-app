"use client";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Paper, Container } from "@mantine/core";
import { signIn } from "next-auth/react";

export function AuthenticationTitle() {
  return (
    <Container>
      <Paper radius="md" p="sm" withBorder>
        <GoogleLoginButton onClick={() => signIn("google")} />
        <GithubLoginButton onClick={() => signIn("github")} />
        <FacebookLoginButton onClick={() => signIn("facebook")} />
      </Paper>
    </Container>
  );
}
