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
  Row,
  Modal,
  useModal,
  Input,
} from "@nextui-org/react";
import { Layout } from "../component/FlagActivity/Layout.js";
import { icons } from "../component/Assets/Icons.js";

export default function App() {
  const { setVisible, bindings } = useModal();

  return (
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
            weight="bold"
            color="inherit"
            hideIn="xs"
            href="/"
            onClick={() => (window.location = "/")}
            css={{
              cursor: "pointer",
            }}
          >
            Queerr
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          hideIn="xs"
          variant="underline-rounded"
          activeColor="secondary"
          isCompact
          isCursorHighlightRounded
        >
          <Navbar.Link isActive href="/">
            home
          </Navbar.Link>
          <Navbar.Link onClick={() => setVisible(true)}>research</Navbar.Link>
          <Navbar.Link href="/community">community</Navbar.Link>
          <Navbar.Link href="/medical">medical</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link>
            <Button size="sm" auto color="secondary" rounded flat>
              Sponser
            </Button>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Toggle showIn="xs" />

        <Navbar.Collapse css={{ zIndex: 20, p: 0 }}>
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
            <Collapse title="Sexual orientation" shadow css={{ width: "100%" }}>
              <Col>
                <Text
                  h3
                  weight="bold"
                  onClick={() => (window.location = "/flag")}
                >
                  Sexual orientation
                </Text>
                <Spacer y={1} />
                <Text h3 weight="bold" onClick={() => (window.location = "#")}>
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
                onClick={() => (window.location = "/medical")}
              >
                Queerr insurance
              </Text>
            </Card>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Spacer y={5} />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        scroll
        width="400px"
        css={{
          marginLeft: "$10",
          marginRight: "$10",
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Input
            css={{
              width: "100%",
            }}
            placeholder="search..."
          />
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Card
              css={{
                w: "100%",
              }}
            >
              <Card.Body
                css={{
                  w: "100%",
                }}
              >
                <Text
                  css={{
                    w: "100%",
                  }}
                >
                  Home
                </Text>
              </Card.Body>
            </Card>

            <Spacer y={0.5} />
            <Card
              css={{
                w: "100%",
              }}
            >
              <Card.Body
                css={{
                  w: "100%",
                }}
              >
                <Text
                  css={{
                    w: "100%",
                  }}
                >
                  Home
                </Text>
              </Card.Body>
            </Card>

            <Spacer y={0.5} />
            <Card
              css={{
                w: "100%",
              }}
            >
              <Card.Body
                css={{
                  w: "100%",
                }}
              >
                <Text
                  css={{
                    w: "100%",
                  }}
                >
                  Home
                </Text>
              </Card.Body>
            </Card>

            <Spacer y={0.5} />
            <Card
              css={{
                w: "100%",
              }}
            >
              <Card.Body
                css={{
                  w: "100%",
                }}
              >
                <Text
                  css={{
                    w: "100%",
                  }}
                >
                  Home
                </Text>
              </Card.Body>
            </Card>

            <Spacer y={0.5} />
            <Card
              css={{
                w: "100%",
              }}
            >
              <Card.Body
                css={{
                  w: "100%",
                }}
              >
                <Text
                  css={{
                    w: "100%",
                  }}
                >
                  Home
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
