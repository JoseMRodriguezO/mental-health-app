export function MoodsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMood(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Mood</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mood">Mood:</label>
          <select>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="anxious">Anxious</option>
          </select>
        </div>
        <div>
          <label htmlFor="mood">Mood Intensity:</label>
          <select>
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit">Create Mood</button>
      </form>
    </div>
  );
}
