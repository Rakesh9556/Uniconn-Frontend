import Card from "./Card.jsx";

const Clubs = () => {
  const cardsData = [
    {
      title: "Dance Club",
    },
    {
      title: "Envirnmental Club",
    },
    {
      title: "Tech Innovation Lab",
    },
    {
      title: "Photography Club",
    },
    {
      title: "Coding Club",
    },
    {
      title: "Debate Club",
    },
    {
      title: "Tech Innovation Lab",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-4 md:grid-cols-5 gap-y-8">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
