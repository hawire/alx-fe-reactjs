import { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="todo-input"   // 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>  {/*  */}
    </form>
  );
}

export default AddTodoForm;
