import 'bootstrap/dist/css/bootstrap.min.css'
export default function Card(props) {
  return (
    <>
    <div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">{props.buttonText}</a>
  </div>
</div>
    </>
  )
}
