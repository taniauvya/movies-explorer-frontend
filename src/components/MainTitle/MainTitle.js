import './MainTitle.css'

const MainTitle = (props) => {
    return (
        <div className='maintitle'>
            <h1 className="maintitle__title">{props.title}</h1>
        </div>
    )
};

export default MainTitle
