import { TaskManager } from "./TaskManager";
export function MoodsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMood(params, () => event.target.reset());
    window.location.href = "/moods";
  };

  return (
    <div>
      <h1>Mood</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mood_type">Mood:</label>
          <select name="mood_type">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="anxious">Anxious</option>
            <option value="frustrate">Frustrated</option>
            <option value="excited">Excited</option>
            <option value="Depressed">Depressed</option>
            <option value="Lonely">Lonely</option>
            <option value="Overwhelmed">Overwhelmed</option>
            <option value="relaxed">Relaxed</option>
          </select>
        </div>
        <div>
          <label htmlFor="mood_intensity">Mood Intensity:</label>
          <select name="mood_intensity">
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Mood
        </button>
      </form>
      <TaskManager />
    </div>
  );
}
