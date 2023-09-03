import './Button.css'

function Button(props){
    const { text, className } = props;

    return (
        <>
            <a href='#' className={className}>{text}</a>
        </>
    )

}

export default Button