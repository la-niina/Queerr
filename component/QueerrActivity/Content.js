import {
  Text,
  Grid,
  Col,
  Button,
  Image,
  Card,
  Container,
  Spacer,
} from "@nextui-org/react";

export const Content = () => {
  return (
    <>
      <Grid.Container
      css={{
        background: "url('/queerrtech.png') repeat"
      }}>
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
              Queerr Card: Empowering LGBTQIA+ Individuals in Africa
            </Text>
            <Text h4 weight="light">
              At Queerr, we believe in building a better future for all LGBTQIA+
              individuals in Africa and beyond. Join us in our mission to create
              a more inclusive and accepting world for all.
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
          </Col>
        </Grid>

        <Grid
          xs={12}
          sm={6}
          css={{ p: 0, alignItems: "center", alignContent: "center" }}
        >
          <Col css={{ p: 0 }}>
            <Image
              alt="alternate"
              width="50%"
              height="50%"
              src="/Queerr.png"
              objectFit="cover"
              css={{ p: 0, zIndex: 20 }}
            />
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container>
        <Col
          css={{
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Text
            h1
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            About Queerr Card {" '' "}Future Idea{" '' "}
          </Text>
          <Text p h5>
            Queerr is a community-based organization dedicated to providing
            information, support, and empowerment for LGBTQIA+ individuals in
            Africa. We believe in creating a more inclusive and accepting future
            for all, regardless of sexual orientation or gender identity.
          </Text>
          <Spacer y={1} />

          <Text p h5>
            As part of our efforts to empower the LGBTQIA+ community, we are
            excited to announce the upcoming launch of the Queerr Card. This
            card will serve as a symbol of solidarity and support for LGBTQIA+
            individuals across the continent. It will also provide access to
            discounts and other benefits at participating businesses and
            organizations.
          </Text>
          <Spacer y={1} />

          <Text p h5>
            In addition to the Queerr Card, we will also be launching a website
            and Android application to provide easy access to our resources and
            services. Our website will be optimized for responsible and
            searchable on Google, with a search description and shareable links
            for social media. We will also be featuring designs for the Queerr
            Card, website, and Android application on our platform.
          </Text>
          <Spacer y={1} />

          <Text p h5>
            At Queerr, we believe in building a better future for all LGBTQIA+
            individuals in Africa and beyond. Join us in our mission to create a
            more inclusive and accepting world for all.
          </Text>
          <Spacer y={1} />
        </Col>
      </Grid.Container>

      <Grid.Container>
        
      </Grid.Container>
    </>
  );
};
