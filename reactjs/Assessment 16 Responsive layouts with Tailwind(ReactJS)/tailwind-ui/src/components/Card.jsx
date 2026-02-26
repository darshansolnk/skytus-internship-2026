import React from "react";

const Card = React.memo(({ title }) => {
  console.log("Rendered:", title);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        This section demonstrates responsive Tailwind styling with utility classes.
      </p>
    </div>
  );
});

export default Card;