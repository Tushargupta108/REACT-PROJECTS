import Rightcard from "./Rightcard";

const Rightcontent = ({ cards = [] }) => {
    return (
      <div className="min-h-[60vh] w-2/3 flex gap-6 overflow-x-auto p-4 bg-gray-50 rounded-3xl shrink-0">
        {cards.map((elem, idx) => (
           <Rightcard key={idx} img={elem.img} tag={elem.tag} />
        ))}
      </div>
    );
};
  
export default Rightcontent;