import "./component.scss"

const Title = (titleName: string)=>{
    return (
        <p className="title largeFont defCursor alignFont ">
            ----- {titleName} -----
        </p>
    )
    
}


export default Title