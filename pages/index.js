import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "../component/HomeActivity/Layout.js";
import { AcmeLogo } from "../component/Assets/AcmeLogo.js";

export default function App() {
  return (
    <Layout>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Queerr
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link  href="#">Identity</Navbar.Link>
          <Navbar.Link href="#">Blof&community</Navbar.Link>
          <Navbar.Link  href="#">Sponser</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
          <Navbar.Link href="#">About queerr</Navbar.Link>
          <Navbar.Link>
            <Button auto color="primary" rounded flat>Register now</Button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}