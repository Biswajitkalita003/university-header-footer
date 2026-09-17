import Header from "./Component/Header/Header";
import MainContent from "./Component/MainContent/MainContent";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header
        universityName="ABC University"
        department="Department of Computer Applications"
      />

      <MainContent />

      <Footer copyrightYear="2026" />
    </div>
  );
}

export default App;