
function FormButtons(props) {
    return (
        <div className="button-wrapper">
            <button onClick={() => {
                if (props.activeTab > 1) {
                    props.setActiveTab(props.activeTab - 1);
                }
            }} style={{visibility: props.isStep1 ? 'hidden' : 'visible'}} className="btn-back | btn clr-neutral-500">Go Back</button>
            <button onClick={(event) => {
                if (props.activeTab < 5) {
                    if (props.isStep1) {
                        
                        const pinfo = props.pinfo;
                        if (pinfo.name !== '' && pinfo.email !== '' && pinfo.phone !== '') {
                            props.setActiveTab(props.activeTab + 1);
                        }

                        (pinfo.name === '') ? props.setRequired(preVal => ({...preVal, name: true})) :
                        props.setRequired(preVal => ({...preVal, name: false}));

                        (pinfo.email === '') ? props.setRequired(preVal => ({...preVal, email: true})) :
                        props.setRequired(preVal => ({...preVal, email: false}));

                        (pinfo.phone === '') ? props.setRequired(preVal => ({...preVal, phone: true})) :
                        props.setRequired(preVal => ({...preVal, phone: false}));

                    } else {
                        props.setActiveTab(props.activeTab + 1);
                    }
                }
                if (props.isStep1) {
                    event.preventDefault();
                }
            }} className={props.confirm ? "btn-submit confirm | btn btn-primary" : "btn-submit | btn btn-primary"}>{props.confirm ? 'Confirm' : 'Next Step'}</button>
        </div>
    )
}

export default FormButtons;