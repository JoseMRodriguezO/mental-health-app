export function MoodsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMoods(currentMood.mood.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h2>Mood Details</h2>
      <p>Mood Type: {currentMood.mood_type}</p>
      <p>Mood Intensity: {currentMood.mood_intensity}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" defaultValue={currentMood.date} />

        <label htmlFor="mood">Mood:</label>
        <select id="mood" name="mood" defaultValue={currentMood.mood}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="anxious">Anxious</option>
        </select>
        <textarea id="notes" name="notes" defaultValue={currentMood.notes}></textarea>

        <button type="submit">Your Mood</button>
      </form>
    </div>
  );
}
