import { MoodChart } from "./Chart";
export function MoodsIndex(props) {
  return (
    <div>
      <MoodChart moods={props.moods} />;<h1>Feelings Tracking</h1>
      <div className="row">
        {props.moods.map((mood) => (
          <div key={mood.id} className="col-sm-4">
            <div className="card" style={{ background: "lightgrey", fontWeight: "bolder" }}>
              <div className="card-body">
                <h5 className="card-title">{mood.mood_type}</h5>
                <p className="card-text"> {mood.mood_intensity}</p>
                <p className="card-text"> {mood.created_at}</p>

                <a href="#"> </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// {props.moods.map((mood) => (
//   <div key={mood.id}>
//     <p>Intensity:{mood.mood_intensity}</p>
//     <p>Type:{mood.mood_type}</p>
//     <p>{mood.created_at}</p>
//     <p></p>
//   </div>
// ))}
// </div>
// );
// }
