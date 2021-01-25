import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function PostEntry() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      {!isExpanded && (
        <div>
          <Fab onClick={expand}>
            <AddIcon />
          </Fab>
        </div>
      )}
      {isExpanded && (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Post Title</Form.Label>
            <Form.Control type="email" placeholder="Title" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
