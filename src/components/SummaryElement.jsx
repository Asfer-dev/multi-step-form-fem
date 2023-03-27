
function SummaryElement(props) {

    return (
        <div className="summary-element">
            <div>
                <div>
                    <h3>{props.plan} ({props.isMonthly ? 'Monthly' : 'Yearly'})</h3>
                    <button className="btn-change clr-neutral-500 | btn" onClick={() => {
                        props.setActiveTab(2)
                    }}>Change</button>
                </div>
                <h3 className="ms-auto">{props.isMonthly ? `$${props.priceMo}/mo` : `$${props.priceYr}/yr`}</h3>
            </div>
            <hr className="clr-neutral-500" />
            {props.selectedAddons.map((addon, i) => {
                return (<div key={i}>
                    <p className="clr-neutral-500">{addon.info[0]}</p>
                    <p className="ms-auto">{props.isMonthly ? `+$${addon.priceMo}/mo` : `+$${addon.priceYr}/yr`}</p>
                </div>
                )
            })}
        </div>
    )
}

export default SummaryElement;