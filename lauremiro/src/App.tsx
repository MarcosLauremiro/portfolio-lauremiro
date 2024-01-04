import { useState } from "react";
import { Header } from "./components/Header";
import { Perfil } from "./components/Perfil";
import { ResetCss } from "./style/reset";
import { Feed } from "./components/Feed";
import { About } from "./components/About";
import { Page } from "./style/page";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

function App() {
  const [page, setPage] = useState("feed");
  const [buttonSelect, setButtonSelect] = useState(false);
  const [buttonSelect2, setButtonSelect2] = useState(false);
  const [buttonSelect3, setButtonSelect3] = useState(false);

  const handleButton = () => {
    setButtonSelect(true);
    setButtonSelect2(false);
    setButtonSelect3(false);
    setPage("feed");
  };
  const handleButton2 = () => {
    setButtonSelect2(true);
    setButtonSelect(false);
    setButtonSelect3(false);
    setPage("about");
  };
  const handleButton3 = () => {
    setButtonSelect3(true);
    setButtonSelect(false);
    setButtonSelect2(false);
    setPage("projects");
  };
  return (
    <>
      <ResetCss />
      <Header />
      <Perfil />
      <Page>
        <div className="page-container">
          <button
            className={buttonSelect ? "buttonSelect" : ""}
            onClick={handleButton}
          >
            Feed
          </button>
          <button
            className={buttonSelect2 ? "buttonSelect" : ""}
            onClick={handleButton2}
          >
            Sobre
          </button>
          <button
            className={buttonSelect3 ? "buttonSelect" : ""}
            onClick={handleButton3}
          >
            Projetos
          </button>
        </div>
      </Page>
      {page === "feed" ? <Feed /> : page === "about" ? <About /> : <Projects />}
      <Footer />
    </>
  );
}

export default App;
