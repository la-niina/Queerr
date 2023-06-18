import {
  Text,
  Spacer,
  Grid,
  Col,
  Button,
  Image,
  Card,
} from "@nextui-org/react";

export const Content = () => {
  return (
    <>
      <Grid.Container
        css={{
          h: "60vh",
          justifyContent: "center",
          alignContent: "center",
          background: "$blue200",
        }}
      >
        <Grid xs={6} sm={6}>
          <Col
          css={{
            p: "$10"
          }}>
            <Text h1>Queerr Community</Text>
            <Text>
              Welcome to our Queer community! Here, you can share and learn
              skills to help you succeed in daily life. We cover online skills,
              social media expertise, software proficiency, job-related
              languages, and online income opportunities. Our moderators review
              shared skills to ensure they can truly help you earn income. Join
              us to enhance your knowledge and grow personally and
              professionally. Ask questions and explore new possibilities with
              our supportive community. Let`s thrive together!
            </Text>
          </Col>
        </Grid>

        <Grid xs={6} sm={6}>
          <Col>
            <Text h1>Popularity</Text>
          </Col>
        </Grid>
      </Grid.Container>
    </>
  );
};
