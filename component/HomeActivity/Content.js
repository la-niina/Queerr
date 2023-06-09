import {
  Text,
  Spacer,
  Grid,
  Col,
  Button,
  Image,
  Card,
  Row,
} from "@nextui-org/react";

export const Content = () => {
  const list = [
    {
      title: "Enquiries",
      content:
        "If you would like to access our online health and wellbeing services at our gender clinic, please click here.",
      url: "/",
    },
    {
      title: "Professionals",
      content:
        "If you would like to talk to a Professionals in a perticular field about anything please click.",
      url: "/",
    },
    {
      title: "Other Enquiries",
      content:
        "If you have any inquirey or question or suggestion that you would like to share please feel free , just here over here.",
      url: "/",
    }
  ];

  return (
    <>
      <Grid.Container
        css={{
          h: "auto",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          css={{
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Col
            css={{
              padding: "20px",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text
              h4
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              QUEERR: BUILDING A MORE INCLUSIVE FUTURE FOR THE LGBTQIA+
              COMMUNITY IN THE WORLD
            </Text>
            <Text h4>
              Supporting the LGBTQIA+ community in Africa and beyond
            </Text>
            <Text
              css={{
                position: "relative",
                top: "10px",
              }}
              h6
            >
              Last updated Jan 2023, 9th | Uganda - KLA
            </Text>
            <Button
              auto
              color="gradient"
              rounded
              flat
              css={{
                position: "relative",
                top: "10px",
                zIndex: 5,
              }}
            >
              Join Queerr
            </Button>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Image
              alt="alternate"
              width="100%"
              height="100%"
              src="/community.png"
            />
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={1} justify="center">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body>
                <Col>
                  <Text h3 weight="bold">
                    {item.title}
                  </Text>
                  <Text
                    h4
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.content}
                  </Text>
                </Col>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Grid.Container></Grid.Container>

      <Grid.Container>
        <Grid
          xs={12}
          sm={12}
          css={{
            padding: "20px",
          }}
        >
          <Card
            isHoverable
            isPressable
            css={{
              borderRadius: "30px",
              zIndex: 10,
              shadow: true,
              boxShadow: "0 0 0 6px #f4aab9, 0 0 0 12px #66ccff",
            }}
          >
            <Col
              css={{
                padding: "20px",
              }}
            >
              <Text h2 weight="bold">
                About Queerr
              </Text>
              <Text h6 size={16}>
                Queerr is a community-based organization dedicated to providing
                information, support, and empowerment for LGBTQIA+ individuals
                in East Africa. We believe in creating a more inclusive and
                accepting future for all, regardless of sexual orientation or
                gender identity.
              </Text>
              <Spacer y={1} />
              <Text h6 size={16}>
                Our mission is to provide a safe space for LGBTQIA+ persons to
                seek support, resources, and community connections. We offer
                educational resources, advocacy, and awareness campaigns to
                promote understanding and acceptance of the LGBTQIA+ community.
              </Text>
              <Spacer y={1} />
              <Text h6 size={16}>
                In addition to our current services, we plan to expand our
                support to include hormonal transitioning for transgender and
                non-binary individuals in the future. Our goal is to provide
                both financial and informational resources to ensure that
                everyone has access to the resources they need to live their
                lives authentically.
              </Text>
              <Spacer y={1} />
              <Text h6 size={16}>
                We also plan to train and educate LGBTQIA+ individuals in
                various skills, including technology, handiwork, social media as
                a business, podcasting, and much more. Our training programs aim
                to help individuals who are unable to start something for
                themselves, acquire skills that can enable them to start
                income-generating activities, and provide them with
                opportunities to work in these jobs.
              </Text>
              <Spacer y={1} />
              <Text h3 weight="bold">
                {"''"} we plan to create the Queerr medical insurance program{" "}
                {"''"}
              </Text>
              <Spacer y={1} />
              <Text h6 size={16}>
                To support this initiative, we plan to create the Queerr medical
                insurance program, which will allow individuals to access
                medical resources for hormonal transitioning regardless of their
                location. We will provide financial support through mobile
                banking and supported cards, ensuring that individuals in places
                that do not support LGBTQIA+ persons will have access to the
                support they need.
              </Text>
              <Spacer y={1} />
              <Text h6 size={16}>
                At Queerr, we believe in building a better future for all
                LGBTQIA+ individuals in East Africa and beyond. Join us in our
                mission to create a more inclusive and accepting world for all.
              </Text>
              <Spacer y={1} />
            </Col>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};
