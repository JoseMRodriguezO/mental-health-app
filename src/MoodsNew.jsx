export function MoodsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMood(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Moods</h1>
      <form onSubmit={handleSubmit}>
        <div>
          UserID: <input user_id="user_id" type="text" />
        </div>
        <div>
          Mood_type: <input mood_type="mood_type" type="text" />
        </div>
        <div>
          Mood_intensity: <input mood_intensity="mood_intensity" type="text" />
        </div>

        <button type="submit">Create Mood</button>
      </form>
    </div>
  );
}
