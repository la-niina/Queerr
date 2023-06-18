import {
  Navbar,
  Button,
  Text,
  Image,
  Card,
  Link,
  Grid,
  Col,
  Spacer,
  Modal,
  useModal,
  Input,
} from "@nextui-org/react";
import { Layout } from "../component/Courser/Layout.js";

export default function App() {
  const { setVisible, bindings } = useModal();

  const menuList = [
    {
      title: "TRANS & NON-BINARY REPO",
      href: "#",
    },
    {
      title: "MEDICAL REPO",
      href: "#",
    },
    {
      title: "SEX EDUCATION REPO",
      href: "#",
    },
    {
      title: "YOUTH REPO",
      href: "#",
    },
    {
      title: "PHARMACY REPO",
      href: "#",
    },
  ];
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
          <Navbar.Link href="/">home</Navbar.Link>

          <Navbar.Link onClick={() => setVisible(true)}>research</Navbar.Link>

          <Navbar.Link isActive href="/community">
            community
          </Navbar.Link>

          <Navbar.Link href="/medical">medical</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link>
            <Button size="sm" auto color="secondary" rounded flat>
              Sponser
            </Button>
          </Navbar.Link>
          <Navbar.Toggle showIn="xs" />
        </Navbar.Content>

        <Navbar.Collapse css={{ zIndex: 20, p: 0 }}>
          <Navbar.CollapseItem>
            <Card
              isHoverable
              css={{ width: "100%", padding: "10px", cursor: "pointer" }}
            >
              <Text h3 weight="bold" onClick={() => (window.location = "/")}>
                home
              </Text>
            </Card>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Card
              isHoverable
              css={{ width: "100%", padding: "10px", cursor: "pointer" }}
            >
              <Text h3 weight="bold" onClick={() => setVisible(true)}>
                research
              </Text>
            </Card>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Card isHoverable css={{ width: "100%", padding: "10px" }}>
              <Text
                h3
                weight="bold"
                onClick={() => (window.location = "/community")}
              >
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
                medical
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
          {menuList.map((item, index) => (
            <Col key={index}>
              <Text
                weight="bold"
                css={{
                  w: "100%",
                }}
              >
                <Link>🎱 {item.title}</Link>
              </Text>
            </Col>
          ))}
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
