import {
  Text,
  Spacer,
  Grid,
  Col,
  Button,
  Image,
  Card,
  Row,
  Container,
} from "@nextui-org/react";
import "@/styles/page.module.css";

export const Content = () => {
  return (
    <Container fluid xl>
      <Grid.Container
        justify="start"
        css={{
          h: "50vh",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        <Grid xs={12} sm={6}>
          <Col>
            <Text
              h1
              css={{
                textAlign: "left",
                padding: "$15",
              }}
            >
              Widespread
              <br />
              misconceptions
              <br />
              <span class="fw5">
                about <span class="rainbow-text">LGBT</span> people
              </span>
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col
            css={{
              padding: "$15",
            }}
          >
            <div class="pill">
              LGBT<span class="underline">Queerr</span>.vercel.app
            </div>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Misconception</Text>
            <Text b className="strikethrough" css={{}}>
              If we make it acceptable to be gay, we`ll encourage more kids to
              become gay when they grow up.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              This statement is based on the assumption that all kids are
              naturally straight and become (or choose to be) gay growing up.
              That is not the case. Many kids often start having crushes when
              they’re as young as 5; some on others of the same sex.{" "}
              <strong>
                Depictions of LGBT+ people in the media do not encourage kids to
                become gay, but rather validate their existing feelings, if
                present.
              </strong>
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Misguided</Text>
            <Text b className="strikethrough" css={{}}>
              We should “let kids decide” if they want to be gay when they grow
              up.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              You can’t choose what you like and whom you are attracted to, just
              like you can’t choose your favorite foods and music.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Myth</Text>
            <Text b className="strikethrough" css={{}}>
              Because gay people cannot procreate, they’ll be wiped out if they
              don’t “recruit” / turn kids gay.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              LGBT people have always existed throughout history. A certain
              percentage of kids born is statistically bound to be LGBT. Thus,
              there’s no need to “turn” anyone, even if such a thing was
              possible.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Misconception</Text>
            <Text b className="strikethrough" css={{}}>
              LGBT people want special rights.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              LGBT people want to have the same rights as straight / cisgender
              people; nothing more, nothing less.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Myth</Text>
            <Text b className="strikethrough" css={{}}>
              You can become gay by associating with gay people.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              There’s no evidence for that. We don’t know what “makes” a person
              gay, just like we don’t know what makes someone straight. But,
              hanging out with people who are open about being LGBT+ could help
              someone who’s afraid to come out to do so, hence the
              misconception.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Myth</Text>
            <Text b className="strikethrough" css={{}}>
              You are either straight or gay. Bisexual people are just confused.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              Although some bisexual people may later identify more strongly
              with either “gay” or “straight,” this doesn’t mean that those
              attracted to people of different sexes and gender identities are
              confused. Even if someone’s sexual orientation changes over time,
              that doesn’t make their initial attraction any less real or valid.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Myth</Text>
            <Text b className="strikethrough" css={{}}>
              Bisexual people can’t be satisfied by a single partner, so they
              will cheat.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              A bisexual person has the potential to be attracted to a person of
              any sex / gender. They are not more likely to want to be with more
              than one person at a time. Whether someone cheats on their partner
              is not related to their sexual orientation.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Stereotype</Text>
            <Text b className="strikethrough" css={{}}>
              You can tell if someone is gay / LGBT+ because they all behave a
              certain way.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              Sometimes you might successfully guess a person’s sexual
              orientation by their appearance or mannerisms. But a lot of the
              time you’d be mistaken, so your impression is only a&nbsp;guess.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container>
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Myth</Text>
            <Text b className="strikethrough" css={{}}>
              Kids are weirded out / confused when they see gay or trans people.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              It’s almost always the parents that are. Children are typically
              nonchalant upon learning / seeing that someone is gay or
              trans—unless they’ve been told before that there’s something wrong
              with&nbsp;it.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Misconception</Text>
            <Text b className="strikethrough" css={{}}>
              Only adults can be LGBT+ because children aren’t sexual.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              While kids don’t typically experience sexual attraction towards
              others, crushes are common for kids aged 4+. Just like some kids
              get crushes on others of the opposite sex in kindergarten, some
              get crushes on kids of the same sex.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Linguistic Misunderstanding</Text>
            <Text b className="strikethrough" css={{}}>
              A man cannot become a woman
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              <p>
                “Woman” can mean{" "}
                <code class="language-plaintext highlighter-rouge">A.</code> a
                human born with ovaries, or{" "}
                <code class="language-plaintext highlighter-rouge">B.</code> the
                social construct which dictates how these humans should behave.
                If you say “a man cannot become a woman,” you‘re using
                definition{" "}
                <code class="language-plaintext highlighter-rouge">A</code>. If
                you disagree, you’re going by definition{" "}
                <code class="language-plaintext highlighter-rouge">B</code>.
              </p>
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Propaganda</Text>
            <Text b className="strikethrough" css={{}}>
              Trans-women are predators
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              “Many of the arguments against trans people today are simply
              recycled homophobia from the ’80s and ’90s. We [were] being told
              that gay people were predators and lesbians were a threat in
              single-sex spaces. That wasn’t true of lesbians, bi and gay people
              then, and it isn’t true of trans people now.”
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Grid.Container className="card">
        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Misconception</Text>
            <Text b className="strikethrough" css={{}}>
              Being sexually attracted to the same sex is unnatural.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <Col>
            <Text h1>Reality</Text>
            <Text b>
              Homosexuality is routinely observed in many animal species,
              including humans. It is therefore “natural”, in the sense that it
              commonly occurs in&nbsp;nature.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Spacer y={1} />
    </Container>
  );
};
