
export default function Button(props:any) {
    return (
        <button
          className="btn btn-primary mx-3 px-5 py-3 mt-2"
          onClick={props.function}
        >
            {props.title}
        </button>
    )
}