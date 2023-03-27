import { TaskManager } from "./TaskManager";
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
          <select name="mood">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="anxious">Anxious</option>
            <option value="anxious">Frustrated</option>
            <option value="anxious">Excited</option>
            <option value="anxious">Depressed</option>
            <option value="anxious">Lonely</option>
            <option value="anxious">Overwhelmed</option>
            <option value="anxious">Relaxed</option>
          </select>
        </div>
        <div>
          <label htmlFor="mood">Mood Intensity:</label>
          <select name="moodIntensity">
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Mood
        </button>
      </form>
      <TaskManager />;
    </div>
  );
}
