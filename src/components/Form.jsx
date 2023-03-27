import { useState } from "react";
import FormHeader from "./FormHeader";
import CardPlan from "./CardPlan";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import iconThankYou from "../assets/images/icon-thank-you.svg";
import FormButtons from "./FormButtons";
import CardAddon from "./CardAddon";
import SummaryElement from "./SummaryElement";

function Form(props) {
    
    const [isMonthly, setMonthly] = useState(true);

    const plans = [
        {id: 1, icon: iconArcade, plan: 'Arcade', priceMo: 9, priceYr: 90, bonus: '2 months free'},
        {id: 2, icon: iconAdvanced, plan: 'Advanced', priceMo: 12, priceYr: 120, bonus: '2 months free'},
        {id: 3, icon: iconPro, plan: 'Pro', priceMo: 15, priceYr: 150, bonus: '2 months free'}
    ];

    const addons = [
        {id: 1, info: ['Online service', 'Access to multiplayer games'], priceMo: 1, priceYr: 10},
        {id: 2, info: ['Larger storage', 'Extra 1TB of cloud save'], priceMo: 2, priceYr: 20},
        {id: 3, info: ['Customizable Profile', 'Custom theme on your profile'], priceMo: 2, priceYr: 20},
    ];

    const [selectedAddons, setSelectedAddons] = useState([]);

    let sumOfAddonMo = 0;
    let sumOfAddonYr = 0;
    selectedAddons.forEach(addon => {
        sumOfAddonMo += addon.priceMo;
        sumOfAddonYr += addon.priceYr;
    })

    const [selectedPlan, setSelectedPlan] = useState({ plan: '', priceMo: '', priceYr: '' })

    function addAddon(addon) {
        let alrSelected = false;
        selectedAddons.forEach(i => {
            if (JSON.stringify(addon) === JSON.stringify(i)) {
                alrSelected = true;
            }
        });
        if (!alrSelected) {
            setSelectedAddons([...selectedAddons, addon]);
        }
    }

    function removeAddon(addon) {
        const newAddonList = selectedAddons;
        newAddonList.pop(addon);
        setSelectedAddons(newAddonList);
    }

    const activeTab = props.activeTab;
    const setActiveTab = props.setActiveTab;

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setPersonalInfo({...personalInfo, [name]: value});
    }

    const [required, setRequired] = useState({name: false, email: false, phone: false});

    const [personalInfo, setPersonalInfo] = useState({name: '', email: '', phone: ''});

    const [planOnFocus, setPlanFocus] = useState(0);

    return (
        <div className="form">
            <div className={activeTab === 1 ? "form-step active" : "form-step"}>
                <FormHeader heading="Personal info"
                subHeading="Please provide your name, email address, and phone number." />
                <form>
                    <div className="flex">
                        <label className="form-label" htmlFor="name">Name</label>
                        <p className="required fw-bold clr-primary-red | ms-auto"
                        style={ {display: required.name ? 'block' : 'none'} }>This field is required</p>
                    </div>
                    <input required className="form-control" type="text" name="name" id="name" placeholder="e.g. Stephen King"
                    onChange={handleInputChange} value={personalInfo.name} style={ {borderColor: required.name && 'var(--clr-primary-red)'} } />

                    <div className="flex">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <p className="required fw-bold clr-primary-red | ms-auto"
                        style={ {display: required.email ? 'block' : 'none'} }>This field is required</p>
                    </div>
                    <input required className="form-control" type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"
                    onChange={handleInputChange} value={personalInfo.email} style={ {borderColor: required.email && 'var(--clr-primary-red)'} } />
                    
                    <div className="flex">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <p className="required fw-bold clr-primary-red | ms-auto"
                        style={ {display: required.phone ? 'block' : 'none'} }>This field is required</p>
                    </div>
                    <input required className="form-control" type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890"
                    onChange={handleInputChange} value={personalInfo.phone} style={ {borderColor: required.phone && 'var(--clr-primary-red)'} } />

                </form>
                <FormButtons pinfo={personalInfo} setRequired={setRequired} activeTab={activeTab} setActiveTab={setActiveTab} isStep1={true} />
            </div>

            <div className={activeTab === 2 ? "form-step active" : "form-step"}>
                <FormHeader heading="Select your plan"
                subHeading="You have the option of monthly or yearly billing." />

                <div className="step-body">
                    <div className="card-plan-wrapper | ">
                        {plans.map(plan => <CardPlan {...plan} isMonthly={isMonthly} key={plan.id}
                        setSelectedPlan={setSelectedPlan} onFocus={planOnFocus} setFocus={setPlanFocus} />)}
                    </div>

                    <div className="toggle-wrapper">
                        <h3 style={ {color: !isMonthly && 'var(--clr-neutral-500)'} }>Monthly</h3>
                        <button className="btn-toggle | btn"
                        onClick={() => setMonthly(!isMonthly)}><div className="circle" 
                        style={ {transform: !isMonthly && 'translate(23px, 0)'} }></div></button>
                        <h3 style={ {color: isMonthly && 'var(--clr-neutral-500)'} }>Yearly</h3>
                    </div>
                </div>
                <FormButtons activeTab={activeTab} setActiveTab={setActiveTab} isStep1={false} />
            </div>

            <div className={activeTab === 3 ? "form-step active" : "form-step"}>
                <FormHeader heading="Pick add-ons"
                subHeading="Add-ons help enhance your gaming experience." />

                <div className="card-addon-wrapper step-body">
                    {addons.map(addon => <CardAddon {...addon} isMonthly={isMonthly} key={addon.id}
                    addAddon={addAddon} removeAddon={removeAddon} />)}
                </div>

                <FormButtons activeTab={activeTab} setActiveTab={setActiveTab}  className="form-control"isStep1={false} />
            </div>

            <div className={activeTab === 4 ? "form-step active" : "form-step"}>
                <FormHeader heading="Finishing up"
                subHeading="Double-check everything looks OK before confirming." />
                <div className="step-body">
                    <SummaryElement {...selectedPlan} selectedAddons={selectedAddons} isMonthly={isMonthly} setActiveTab={setActiveTab} />
                    <div className="total-wrapper">
                        <p className="total clr-neutral-500">Total (per {isMonthly ? 'month' : 'year'})</p>
                        <p className="total-price ms-auto">${isMonthly ? `${selectedPlan.priceMo + sumOfAddonMo}/mo` : `${selectedPlan.priceYr + sumOfAddonYr}/yr`}</p>
                    </div>
                </div>
                <FormButtons activeTab={activeTab} setActiveTab={setActiveTab} isStep1={false} confirm={true} />
            </div>

            <div className={activeTab === 5 ? "last-step form-step active" : "last-step form-step"}>
                <img className="icon-thankyou" src={iconThankYou} alt="check mark" />
                <FormHeader heading="Thank you!"
                subHeading="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
                />
            </div>
        </div>
    )
}

export default Form;