
function CardPlan(props) {

    return (
        <div onClick={() => {
            props.setSelectedPlan({plan: props.plan, priceMo: props.priceMo, priceYr: props.priceYr});
            props.setFocus(props.id);
        }}
        className="card-plan | " style={ {borderColor: props.onFocus === props.id && 'var(--clr-primary-400)', backgroundColor: props.onFocus === props.id && 'var(--clr-neutral-200)'} }>
            <img className="card-icon | card-img-top" src={props.icon} alt="card icon" />
            <div className="card-body">
                <h2 className="card-title">{props.plan}</h2>
                <p className="pricing | clr-neutral-500 fw-medium">{props.isMonthly ? `$${props.priceMo}/mo` : `$${props.priceYr}/yr`}</p>
                <p className="bonus">{!props.isMonthly && props.bonus}</p>
            </div>
        </div>
    )
}

export default CardPlan;