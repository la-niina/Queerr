import { Navbar, Button, Text, Image, Dropdown } from "@nextui-org/react";
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
        </Navbar>
      </Layout>
    </>
  );
}
