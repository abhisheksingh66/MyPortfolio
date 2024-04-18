
import './style.scss';

const PageheaderContent = (props) => {

    const { headerText, icon } = props;

    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )

}

export default PageheaderContent;