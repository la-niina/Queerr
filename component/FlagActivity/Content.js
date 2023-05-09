import {
  Text,
  Grid,
  Col,
  Button,
  Image,
  Card,
  Container,
} from "@nextui-org/react";

export const Content = () => {
  const list = [
    {
      title: "Heterosexuality",
      objectFit: "contain",
      img: "https://static.wikia.nocookie.net/sexuality/images/7/79/2000px-HeteroSym-pinkblue2_svg.png",
      description:
        "Heterosexuality is romantic attraction, sexual attraction or sexual behavior between persons of opposite sex or gender. As a sexual orientation, heterosexuality is an enduring pattern of emotional, romantic, and/or sexual attractions to persons of the opposite sex; it also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions.",
    },
    {
      title: "Bisexuality",
      objectFit: "cover",
      img: "https://static.wikia.nocookie.net/sexuality/images/9/92/Bisexual_flagCDD64873-0867-40D0-8613-90C813FE412D.png",
      description:
        "Bisexuality, often shortened as Bi, is a fluid identity that encompasses the sexual attraction between two genders and all genders, with or without preferences to gender.",
    },
    {
      title: "Pansexuality",
      objectFit: "cover",
      img: "/Pan.Pride.png",
      description:
        "Pansexuality,[1] often shortened to Pan, is sexual attraction, romantic love (also referred to as Panromantic), or emotional attraction toward people of either sex or any gender identity.[2][3] Pansexual people may refer to themselves as gender-blind, asserting that gender and sex are insignificant or irrelevant in determining whether they will be sexually attracted to others. [4][5]",
    },
    {
      title: "Sexual orientation",
      objectFit: "cover",
      img: "/Pride2020.png",
      description:
        "Sexual orientation is an enduring pattern of romantic or sexual attraction (or a combination of these) to persons of the opposite sex or gender, the same sex or gender, or to both sexes or more than one gender. These attractions are generally subsumed under heterosexuality, homosexuality, and bisexuality,[1][2] while asexuality (the lack of sexual attraction to others) is sometimes identified as the fourth category.",
    },
    {
      title: "Asexuality",
      objectFit: "cover",
      img: "/asexuality.png",
      description:
        "Asexuality [1][2][3] is the lack of sexual attraction to anyone or low or absent interest in sexual activity.[4][5][6] It is one of the many sexual orientations, alongside heterosexuality, homosexuality, bisexuality.[7][8][9], etc. A study in 2004 placed the prevalence of asexuality at 1% in the British population.[7][10]",
    },
    {
      title: "Omnisexuality",
      objectFit: "cover",
      img: "/Omnisexuality.jpg",
      description:
        "Omnisexuality is a multisexual sexual orientation where one is attracted to all gender identities, with gender being a contributing factor towards attraction. Some omnisexuals experience attraction to different traits in different genders, and some may have a gender preference.",
    },
    {
      title: "Polysexuality",
      objectFit: "cover",
      img: "/Poly.Pride.png",
      description:
        "Polysexuality is the attraction to many sexes, genders, and/or gender expressions, but not all. It should not be confused with polyamory: the desire for or practice of having multiple intimate partners with the consent of all individuals involved.",
    },
    {
      title: "Abrosexual",
      objectFit: "cover",
      img: "/Abrosexual.png",
      description:
        "Abrosexual refers to an individual whose sexuality is changing or fluid. For example, someone could be gay one day, then be asexual the next, then polysexual the next. While it is possible—and even common—for a person's sexual identity to shift or change in some way throughout their life, an abrosexual person's sexuality may change more frequently, over the course of hours, days, months, or years.",
    },
    {
      title: "Aceflux",
      objectFit: "cover",
      img: "/Aceflux_flag.png",
      description:
        "Aceflux is a sexual orientation on the asexual spectrum. It is defined as someone whose sexual orientation fluctuates but generally stays on the asexual spectrum. An aceflux person may feel very strongly asexual one day and less asexual another day, they might feel demisexual or greyasexual at times. Some aceflux people may feel like they are allosexual at times.",
    },
    {
      title: "STILL DOING RESEARCH...",
      objectFit: "cover",
      img: "https://static.wikia.nocookie.net/sexuality/images/f/fa/Aceflux_flag.png/revision/latest?cb=20220721041614",
      description:
        "The information provided on here is first researched but you should also do some research for yourself since we don't provide full context...",
    },
  ];

  return (
    <>
      <Grid.Container css={{ height: "100%" }}>
        <Grid xs={12} sm={6} css={{ height: "100%" }}>
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
              Discovering Sexual Orientations: An Introduction to LGBTQIA+ Identities
            </Text>
            <Text h4 weight="light">
              The information provided on this page is for informational
              purposes only and is not intended to provide medical or legal
              advice. Always consult a qualified professional for personalized
              advice.
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

        <Grid xs={12} sm={6} css={{ height: "100%" }}>
          <Col css={{ height: "100%" }}>
            <Image alt="alternate" width="70%" height="70%" src="/self.png" />
          </Col>
        </Grid>
      </Grid.Container>

      <Container fluid xl>
        <Text
          h3
          weight="bold"
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
        >
          Flags and Brief description
        </Text>
      </Container>
      <Grid.Container gap={2} justify="center" css={{ height: "100%" }}>
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index} css={{ height: "100%" }}>
            <Card css={{ display: "flex", flexDirection: "column" }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit={item.objectFit}
                  width="100%"
                  height={240}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ top: 0 }}>
                <Col>
                  <Text h5 weight="bold">
                    {item.title}
                  </Text>
                  <Col>
                    <Text h6 weight="normal">
                      {item.description}
                    </Text>
                  </Col>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
