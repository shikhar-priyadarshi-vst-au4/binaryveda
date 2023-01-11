import APITeam from "../../assets/img/apiTeam.png";
import GraphQL from "../../assets/img/graphQL.png";
import Workflow from "../../assets/img/superchargeWorkflow.png";

const services = [
    {
        image: APITeam,
        heading: "Dedicated API Team",
        paragraph: "Our team are available for user's questions via our Slack Developer Community and Email"
    },
    {
        image: GraphQL,
        heading: "Our API uses Graph QL",
        paragraph: "No handling server side. Get many API's responses in a single request."
    },
    {
        image: Workflow,
        heading: "Supercharge your workflow",
        paragraph: "Automate workflows, integrate and analyse data and take Marvel to the next level."
    },
]

const Service = (props) => {
    return <div className="flex flex-col items-center gap-y-4 text-white text-center">
        <img src={props.image} className="w-3/4"/>
        <h5 className="font-medium text-lg">{props.heading}</h5>
        <p className="font-normal text-white/50 text-base px-8 leading-6">{props.paragraph}</p>
    </div>
}

export default function Services(){
    return <section className="grid grid-cols-1 md:grid-cols-3 my-20">
            {services.map((service, index) => <Service {...service} key={index}/>)}
    </section>
}