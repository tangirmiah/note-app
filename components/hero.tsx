import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  Modal,
} from "@mantine/core";
import { AuthenticationTitle } from "./login";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    minHeight: "80vh",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "violet" }}>
                fully featured
              </Text>{" "}
              Text editor to take your notes
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              rerum doloribus blanditiis odio quidem voluptatibus excepturi ab
              eaque repudiandae eveniet, repellendus neque quibusdam iure autem,
              nisi eum, nostrum accusantium voluptas.
            </Text>

            <Modal
              opened={opened}
              onClose={close}
              title="Authentication"
              centered>
              <AuthenticationTitle />
            </Modal>
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "violet" }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={open}>
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
