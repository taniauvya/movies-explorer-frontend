import './MainTitle.css'

const MainTitle = (props) => {
    return (
        <div className='maintitle'>
            <div className='maintitle__space' />
            <h1 className="maintitle__title">{props.title}</h1>
        </div>
    )
};

export default MainTitle
