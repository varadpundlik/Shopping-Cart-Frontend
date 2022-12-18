import DeleteIcon from '@mui/icons-material/Delete';

function Tile(props){
    function DeleteItem(item){
        props.onDelete(props.id)
    }
    return(
        <div className='tile'>
            <h4>{props.title}</h4>
            <button onClick={DeleteItem} className="delete"><DeleteIcon/></button>
        </div>
    )
}

export default Tile;