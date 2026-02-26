import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Features
        </h2>

        <div className="grid gap-8 
                        sm:grid-cols-1 
                        md:grid-cols-2 
                        lg:grid-cols-3">

          <Card title="Fast Performance" />
          <Card title="Responsive Design" />
          <Card title="Modern UI" />
          <Card title="Reusable Components" />
          <Card title="Clean Code" />
          <Card title="Optimized Rendering" />

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App; 