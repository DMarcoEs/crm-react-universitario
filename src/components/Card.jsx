function Card({ title, children }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        shadow-md
        ring-1 ring-slate-200
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {title && (
        <h3
          className="
            text-lg
            font-extrabold
            tracking-tight
            text-slate-800
            mb-3
            transition-all duration-300
            hover:-translate-y-1
            hover:drop-shadow-lg
          "
        >
          {title}
        </h3>
      )}

      <div className="text-3xl font-bold text-indigo-600">
        {children}
      </div>
    </div>
  );
}

export default Card;
