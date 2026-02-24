import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav
        ariaLabel="Main Navigation"
        role="navigation"
        className="main-nav"
        links={["Home", "Trends", "Outfits", "About"]}
        color="lightgray"
      />

      <main className="post-grid">
        <BlogPost
          label="NEW DROP"
          title="STYLE IN THE STREETS"
          subtitle="Street fashion trends and influences..."
          img="https://via.placeholder.com/400x250"
        />

        <BlogPost
          label="NEW DROP"
          title="LATEST SNEAKER DROPS"
          subtitle="New releases and must-have kicks..."
          img="https://via.placeholder.com/400x250"
        />

        <BlogPost
          title="URBAN AESTHETIC"
          subtitle="Exploring graffiti’s impact on style..."
          img="https://via.placeholder.com/400x250"
        />

        <BlogPost
          title="MUST-HAVE HOODIES"
          subtitle="Top picks for your streetwear wardrobe..."
          img="https://via.placeholder.com/400x250"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App