import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

import { Section } from "../../components/Section";

import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Everyone" $isactive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />

      
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create note
      </NewNote>
    </Container>
  );
}
