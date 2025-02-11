import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles(theme => ({
  root: {
    height: '100%',
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

const Page404 = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <Center sx={{ height: '100%' }}>
        <Box>
          <div className={classes.label}>404</div>
          <Title className={classes.title}>
            You have found a secret place.
          </Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            Unfortunately, this is only a 404 page. You may have mistyped the
            address, or the page has been moved to another URL.
          </Text>
          <Group position="center">
            <Button variant="subtle" size="md" component={Link} href="/">
              Take me back to home page
            </Button>
          </Group>
        </Box>
      </Center>
    </Container>
  );
};

export default Page404;
