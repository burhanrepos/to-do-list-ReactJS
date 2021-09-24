
const List = (props) => {
    const text = props.text;
    console.log(text);
    if (text !== "") {
        return (
            <div className="item">
                <li className="task">{props.text}
                    <button className="delete-btn" onClick={() => {
                        return props.onDelete(props.id);
                    }} >Delete</button>
                </li>
            </div>
        );
    }
    else {
        return (null);
    }

}
export default List;