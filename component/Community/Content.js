import {
  Text,
  Grid,
  Col,
  Image,
  Card,
  Modal,
  useModal,
  Input,
  Spacer,
  Button,
  Row,
  Container,
} from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import { React, useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";

export const Content = () => {
  const { setVisible, bindings } = useModal();
  const [data, setData] = useState([]);
  const [courserData, setCourseData] = useState([]);

  const extractImageUrl = (content) => {
    const regex = /<img.*?src="(.*?)"/;
    const match = regex.exec(content);
    return match ? match[1] : null;
  };

  const returnFromDatabase = () => {
    const dbRef = ref(database, "queerr/courser");
    onValue(
      dbRef,
      (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          data.push({ childData, childKey });
        });
        setData(data);
      },
      {
        onlyOnce: true,
      }
    );
  };

  useEffect(() => {
    returnFromDatabase();
  });

  return (
    <Container fluid xl>
      <Grid.Container
        css={{
          h: "auto",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid xs={12} sm={6}>
          <Col
            css={{
              p: "$10",
            }}
          >
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

        <Grid
          xs={12}
          sm={6}
          css={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Col>
            <Image
              alt="alternate"
              width="50vh"
              height="50vh"
              css={{
                borderRadius: "30px",
                padding: "$10",
              }}
              src="https://cdn.dribbble.com/users/2883527/screenshots/11221239/media/41f4b86c719494bdb7f7a75345dfafcf.png?compress=1&resize=768x576&vertical=center"
            />
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container>
        <Grid xs={12} sm={12}>
          <Col>
            <Text>More knowledge in less time</Text>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="flex-start">
        {data.map((item) => (
          <Grid xs={12} sm={3} key={item.childKey}>
            <Card
              onPress={() => {
                setVisible(true);
                setCourseData(item.childData);
              }}
              isPressable
              css={{
                h: "auto",
              }}
            >
              <Card.Body css={{ p: 0 }}>
                <Col>
                  <Card.Image
                    src={extractImageUrl(item.childData.content)}
                    objectFit="cover"
                    width="100%"
                    height={180}
                    css={{
                      borderRadius: "10px",
                    }}
                    alt={item.title}
                  />
                  <Col
                    css={{
                      p: "$5",
                    }}
                  >
                    <Text h4>{item.childData.title}</Text>
                    <Text>{item.childData.description}</Text>
                  </Col>
                </Col>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Col>
            <Text h4 id="modal-title">
              {courserData.title}
            </Text>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container>
            <Grid
              xs={12}
              sm={9}
              css={{
                height: "100%",
              }}
            >
              <Container>
                <Col
                  css={{
                    height: "100%",
                  }}
                >
                  <Editor
                    apiKey="zam7qc1yeyek6lwcjnyxu0fvz2jga3ssd2rc6aldylh1leny"
                    value={courserData.content}
                    disabled
                    init={{
                      height: "100%",
                      width: "100%",
                      inline: true,
                      selector: "textarea",
                      highlight_on_focus: true,
                      promotion: true,
                      plugins: ["quickbars"],
                      toolbar: false,
                      menubar: false,
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}, img { border-radius: 20px;}",
                    }}
                  />
                </Col>
              </Container>
            </Grid>

            <Grid xs={12} sm={3}>
              <Col
                css={{
                  p: "$5",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  grid: "2",
                }}
              >
                <Text h3>Looking for something?</Text>
                <Input
                  css={{
                    w: "100%",
                  }}
                  labelRight=".org"
                />
                <Spacer y={1} />
                <Text h3>Subscribe to Podcast</Text>

                <Grid.Container gap={1}>
                  <Grid xs={6} sm={4.5}>
                    <Button
                      rounded
                      auto
                      bordered
                      color="gradient"
                      className="pp-ssb-btn"
                    >
                      Podcast
                    </Button>
                  </Grid>

                  <Grid xs={6} sm={4.5}>
                    <Button
                      rounded
                      auto
                      bordered
                      color="gradient"
                      className="pp-ssb-btn"
                    >
                      Youtube
                    </Button>
                  </Grid>

                  <Grid xs={6} sm={4.5}>
                    <Button
                      rounded
                      auto
                      bordered
                      color="gradient"
                      className="pp-ssb-btn"
                    >
                      Twitter
                    </Button>
                  </Grid>

                  <Grid xs={6} sm={4.5}>
                    <Button
                      rounded
                      auto
                      bordered
                      color="gradient"
                      className="pp-ssb-btn"
                    >
                      Tiktok
                    </Button>
                  </Grid>

                  <Grid xs={6} sm={4.5}>
                    <Button
                      rounded
                      auto
                      bordered
                      color="gradient"
                      className="pp-ssb-btn"
                    >
                      Facebook
                    </Button>
                  </Grid>
                </Grid.Container>
              </Col>
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
