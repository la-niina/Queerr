import { Text, Spacer, Grid, Col, Button, Image, Card } from "@nextui-org/react";
import { Box } from "./Box.js";

export const Content = () => {
  return (
    <>
      <Grid.Container>
        <Grid xs={12} sm={6}>
          <Col
            css={{
              padding: "20px",
            }}
          >
            <Text
              h1
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              Career fair and confluence for LGBTQ+ community
            </Text>
            <Text h4 weight="light">
              One of it's kind LGBTQ+ Job fair
            </Text>
            <Text
              css={{
                position: "relative",
                top: "10px",
              }}
              h6
            >
              16th November 2019 | Delhi - NCR
            </Text>
            <Button
              auto
              color="primary"
              rounded
              flat
              css={{
                position: "relative",
                top: "10px",
              }}
            >
              Register now
            </Button>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Image
              alt="alternate"
              width="80%"
              height="80%"
              src="/community.png"
            />
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container>
        <Grid xs={12} sm={12}
        css={{
           padding: "20px",
        }}>
            <Card
            isHoverable
            isPressable
            css={{
                background: "#232228",
                borderRadius: "30px",
                zIndex: 10,
                shadow: true,
                boxShadow: "0 0 0 6px #f4aab9, 0 0 0 12px #66ccff"
            }}>
            <Col
            css={{
                padding: "20px",
             }}>
            <Text h2 weight="bold" color="primary">About Queerr</Text>
            <Text h6 size={16} weight="light" color="secondary">
              Time and tide certainly wait for none. Change is the only constant
              that we have known, "Q-rious" a one of it's kind event platform
              for corporates to network with and understand the perspectives of
              the LGBTQ+ community and also explore employability options.
            </Text>
            <Spacer y={1} />
            <Text h3 weight="bold" color="primary">The event is on an "Invite-only" basis.</Text>
            <Spacer y={1} />
            <Text h6 size={16} weight="light" color="secondary">
              Conceptualized by Stockroom.io and Equiv along with Humsafar Trust
              on the extremely successful model of Women Changemakers, this
              event is completely free to attend for the members of the LGBTQ+
              community.
            </Text>
          </Col>
            </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};
