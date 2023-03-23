export function MoodsShow(props) {
  const OnCreateMood = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMood(props.mood.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>All Journal Entries</h1>

      {props.moods.map((mood) => (
        <div key={mood.type}>
          <h1>{mood.intensity}</h1>
          <button onClick={() => props.onShowMood(mood)}>Full Story</button>
        </div>
      ))}
    </div>
  );
}
