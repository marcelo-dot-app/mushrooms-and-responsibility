import Paragraph from "../components/Paragraph.tsx";
import Header from "../components/Header.tsx";

export default function Article() {

  return (
    <div className="w-full h-full">
      <Header>
        The important thing is this: to be ready at any moment to sacrifice what you are for what you could become.
        ― Charles Dickens
      </Header>
      <Paragraph className="text-white">
        Paragraph 1
      </Paragraph>
    </div>
  )
}
