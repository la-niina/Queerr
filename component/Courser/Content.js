import { Spacer, Grid, Col, Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import { database } from "../../firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";
import { Editor } from "@tinymce/tinymce-react";

export const Content = () => {
  const router = useRouter();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePublish = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();

      const databaseRef = ref(database, "queerr/courser");
      const newPostRef = push(databaseRef);
      set(newPostRef, {
        title: title,
        description: description,
        content: content,
        timestamp: serverTimestamp(),
      });

      toast.success("Thank you for publishing successfully!❤️");
      // Clear input fields and editor content after publishing
      setTitle("");
      setDescription("");
      editorRef.current.setContent("<p>Write your Course Content.</p>");

      router.push("/community");
    }
  };

  return (
    <>
      <ToastContainer />
      <Grid.Container>
        <Col
          css={{
            padding: "$10",
          }}
        >
          <Button auto flat rounded onClick={handlePublish}>
            Publish
          </Button>
          <Spacer y={1} />
          <Input
            bordered
            label="Title"
            placeholder="Course Title"
            css={{
              w: "100%",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Spacer y={0.5} />
          <Input
            bordered
            label="Description"
            placeholder="Please describe the Course Description"
            css={{
              w: "100%",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Spacer y={0.5} />
          <Editor
            label="Content"
            apiKey="zam7qc1yeyek6lwcjnyxu0fvz2jga3ssd2rc6aldylh1leny"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Write your Course Content.</p>"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              mobile: {
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              },
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </Col>
      </Grid.Container>
    </>
  );
};
