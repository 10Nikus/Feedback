type InputProps = {
  title: string;
  description: string;
  type: string;
};

export default function Input({
  title,
  description,
  type,
  ...props
}: InputProps) {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      {type === "select" && <select />}
      {type === "text" && <input type={type} {...props} />}
      {type === "textarea" && <textarea {...props} />}
    </div>
  );
}
