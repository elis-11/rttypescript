interface InputFieldProps {
  title: string;
  handleInput: (str: string) => void;
  handleSubmit: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  title,
  handleInput,
  handleSubmit,
}) => {
  return (
    <label className="todort">
      <input
        placeholder="New todo"
        value={title}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </label>
  );
};
