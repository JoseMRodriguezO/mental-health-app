export function MoodsNew() {
  return (
    <div>
      <h1>Moods</h1>
      <form>
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
