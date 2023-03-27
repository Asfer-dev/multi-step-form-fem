import { useState } from "react";

function CardAddon(props) {

    const [checked, setChecked] = useState(false);

    function handleClick(addon) {
        setChecked(!checked);
        if (!checked) {
            props.addAddon(addon);
        } else {
            props.removeAddon(addon);
        }
    }

    return (
        <div className="card-addon" onClick={() => {
            handleClick({info: [props.info[0], props.info[1]], priceMo: props.priceMo, priceYr: props.priceYr})
        }}
            style={ {borderColor: checked && 'var(--clr-primary-400)',
            backgroundColor: checked && 'var(--clr-neutral-200)'} }>
            
            <input className="form-check-input" checked={checked} onChange={() => setChecked(!checked)} type="checkbox" />
            
            <div className="info">
                <h3>{props.info[0]}</h3>
                <p className="clr-neutral-500">{props.info[1]}</p>
            </div>
            <p className="addon-price clr-primary-400 | ms-auto">{props.isMonthly ? `+$${props.priceMo}/mo` : `+$${props.priceYr}/yr`}</p>
        </div>
    )
}

export default CardAddon;