export function MoodsShow(props) {
  return (
    <div>
      <h1>Mood</h1>
      <p>Mood Type: {props.mood.type} </p>
      <p>Mood Level:{props.mood.intensity} </p>
      <form>
        <div>
          Mood Type <input defaultValue={props.mood.type} name="type" type="text" />
        </div>

        <div>
          Mood level <input defaultValue={props.mood.intensity} name="intensity" type="text" />
        </div>
      </form>
    </div>
  );
}
