const Card = ({ title, content }) => {
  return (
    <article className="bg-white text-black rounded-lg shadow-sm text-center m-4 p-4">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Card;
