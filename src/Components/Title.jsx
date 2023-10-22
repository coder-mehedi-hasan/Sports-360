const Title = ({ title, description, center  }) => {
  return (
    <div className={`${center && "text-center"} space-y-2`}>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className="font-medium text-gray-600">{description}</p>
    </div>
  );
};

export default Title;
