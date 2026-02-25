import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
        >
          <img src="/brooklyn.jpg" alt="Person in orange outfit standing against a blue wall" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem
          deserunt nemo dignissimos. Veniam inventore eligendi magnam corporis odit
          mollitia cupiditate eveniet ex officiis fugiat aliquid laborum dolore.
          Veniam amet autem cum dicta est ut et neque alias. Tempore perspiciatis
          qui impedit voluptas aut voluptates totam dolore debitis eos consequatur
          nulla ut nobis cupiditate optio ut.
        </Article>

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          >
          <img src="/vintage.jpg" alt="Vintage fashion model posing"/>
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem
          deserunt nemo dignissimos. Veniam inventore eligendi magnam corporis odit
          mollitia cupiditate eveniet ex officiis fugiat aliquid laborum dolore.
          Veniam amet autem cum dicta est ut et neque alias. Tempore perspiciatis
          qui impedit voluptas aut voluptates totam dolore debitis eos consequatur
          nulla ut nobis cupiditate optio ut.
        </Article>
      </main>

      <Footer />
    </div>
  );
}