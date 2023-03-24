export function MoodsIndex(props) {
  return (
    <div>
      <h1>Moods</h1>

      {props.moods.map((mood) => (
        <div key={mood.id}>
          <p>Intensity:{mood.mood_intensity}</p>
          <p>Type:{mood.mood_type}</p>
          <p>{mood.created_at}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
