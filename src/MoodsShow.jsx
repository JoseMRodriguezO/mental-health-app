export function MoodsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMoods(props.currentMood.mood.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h2>Mood Details</h2>
      <p>Mood Type: {props.currentMood_type}</p>
      <p>Mood Intensity: {props.currentMood_intensity}</p>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
