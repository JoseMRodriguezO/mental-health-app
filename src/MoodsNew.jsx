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
          Mood Type: <input name="mood_type" type="text" />
        </div>
        <div>
          Mood Level: <input name="mood_intensity" type="text" />
        </div>

        <button type="submit">Create Mood</button>
      </form>
    </div>
  );
}
