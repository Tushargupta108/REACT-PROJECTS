import Navbar from "./Navbar.jsx";
import Page1content from "./Page1content.jsx";

const Sec1 = ({ cards }) => {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <Page1content cards={cards} />
    </div>
  );
};

export default Sec1;