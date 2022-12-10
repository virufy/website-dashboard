const Card = ({ title, content, no_data }) => {
  return (
    <article className="bg-white text-black rounded-lg shadow-sm text-center m-4 p-4 opacity-[.90]">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="font-medium">{content == 0 ? no_data : content}</p>
    </article>
  );
};

export default Card;
