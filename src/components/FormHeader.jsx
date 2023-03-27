
function FormHeader(props) {
    return (
        <div>
            <h1 className="form-heading fw-bold">{props.heading}</h1>
            <p className="form-subheading clr-neutral-500">{props.subHeading}</p>
        </div>
    )
}

export default FormHeader;