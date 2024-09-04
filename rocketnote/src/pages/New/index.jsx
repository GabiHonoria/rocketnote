import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";


import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">return</Link>
          </header>

          <Input placeholder="Title" />
          <Textarea placeholder="Observations" />

          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="new link" />
          </Section>

          <Section title= "Markers">
            <div className="tags"> 
          <NoteItem value="react" />
          <NoteItem isNew placeholder="new tag"/>
            </div>
          </Section>

          <Button title= "Salve"/>
        </Form>
      </main>
    </Container>
  );
}
