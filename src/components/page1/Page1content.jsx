
import Leftcontent from "./Leftcontent.jsx";
import Rightcontent from "./Rightcontent.jsx";

const Page1content = ({ cards }) => {
  return (
    <div className="flex min-h-[80vh] w-full items-stretch gap-6 px-8 py-6">
      <Leftcontent />
      <Rightcontent cards={cards} />
    </div>
  );
};

export default Page1content;