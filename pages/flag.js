import {
  Navbar,
  Button,
  Text,
  Image,
  Dropdown,
  Card,
  Link,
  Grid,
  Col,
  Collapse,
  Spacer,
} from "@nextui-org/react";
import { Layout } from "../component/FlagActivity/Layout.js";
import { icons } from "../component/Assets/Icons.js";
import Head from "next/head.js";

export default function App() {
  return (
    <>
      <Head>
        <title>Queerr - Supporting LGBTQIA+ Persons in Africa</title>
        <meta
          name="description"
          content="Queerr is an organization providing information and support to LGBTQIA+ persons in Africa. We also plan to provide financial and informational support for hormonal transitioning and train individuals in various skills for income opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Queerr - Supporting LGBTQIA+ Persons in Africa"
        />
        <meta
          property="og:description"
          content="Queerr is an organization providing information and support to LGBTQIA+ persons in Africa. We also plan to provide financial and informational support for hormonal transitioning and train individuals in various skills for income opportunities."
        />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:url" content="https://queerr.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Queerr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:image:alt" content="Queerr Logo" />
      </Head>

      <Layout>
        <Navbar isCompact variant="sticky">
          <Navbar.Brand>
            <Image
              onClick={() => (window.location = "/")}
              css={{
                cursor: "pointer",
              }}
              alt="alternative"
              src="/next.svg"
              width={48}
              height={48}
            />
            <Text
              onClick={() => (window.location = "/")}
              css={{
                cursor: "pointer",
              }}
              b
              color="inherit"
              hideIn="xs"
            >
              Queerr
            </Text>
          </Navbar.Brand>
          <Navbar.Content
            hideIn="xs"
            variant="underline-rounded"
            activeColor="primary"
            isCompact
            isCursorHighlightRounded
          >
            <Navbar.Link href="/">Home</Navbar.Link>
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  Sexual orientation
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="Sexual orientation"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item
                  key="Sexualorientation"
                  icon={icons.scale}
                  onClick={() => (window.location.href = "/flag")}
                >
                  <Text
                    h4
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                    onClick={() => (window.location.href = "/flag")}
                  >
                    Sexual orientation
                  </Text>
                </Dropdown.Item>

                <Dropdown.Item key="usage_metrics" icon={icons.activity}>
                  <Text
                    h4
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                    onClick={() => (window.location.href = "#")}
                  >
                    Usage Metrics
                  </Text>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link href="#">Community</Navbar.Link>
            <Navbar.Link href="/queerrcard">Queerr insurance</Navbar.Link>
            <Navbar.Link>
              <Button auto color="primary" rounded flat>
                Sponser
              </Button>
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle showIn="xs" />

          <Navbar.Collapse css={{ zIndex: 20, p: 0 }}>
            <Navbar.CollapseItem>
              <Card css={{ p: "0", w: "100%", zIndex: 20 }}>
                <Card.Header>
                  <Image
                    alt="nextui logo"
                    src="/self.png"
                    width="100%"
                    height="100%"
                  />
                  <Grid.Container css={{ pl: "$1" }}>
                    <Grid xs={12}>
                      <Text h2 css={{ lineHeight: "$xs" }}>
                        Queerr
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>

                <Card.Body css={{ py: "$2" }}>
                  <Text>
                    At Queerr, we believe in building a better future for all
                    LGBTQIA+ individuals in Africa and beyond. Join us in our
                    mission to create a more inclusive and accepting world for
                    all.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="https://queerr.vercel.app/"
                  >
                    Moluccus
                  </Link>
                </Card.Footer>
              </Card>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Card
                isHoverable
                css={{ width: "100%", padding: "10px", cursor: "pointer" }}
              >
                <Text h3 weight="bold" onClick={() => (window.location = "/")}>
                  Home
                </Text>
              </Card>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Collapse
                title="Sexual orientation"
                shadow
                css={{ width: "100%" }}
              >
                <Col>
                  <Text
                    h3
                    weight="bold"
                    onClick={() => (window.location = "/flag")}
                  >
                    Sexual orientation
                  </Text>
                  <Spacer y={1} />
                  <Text
                    h3
                    weight="bold"
                    onClick={() => (window.location = "#")}
                  >
                    Usage Metrics
                  </Text>
                  <Spacer y={1} />
                </Col>
              </Collapse>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Card isHoverable css={{ width: "100%", padding: "10px" }}>
                <Text h3 weight="bold" onClick={() => (window.location = "#")}>
                  Community
                </Text>
              </Card>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Card isHoverable css={{ width: "100%", padding: "10px" }}>
                <Text
                  h3
                  weight="bold"
                  onClick={() => (window.location = "/queerrcard")}
                >
                  Queerr insurance
                </Text>
              </Card>
            </Navbar.CollapseItem>
            <Spacer y={5} />
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
}
