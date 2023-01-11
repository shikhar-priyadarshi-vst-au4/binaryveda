import { WhiteLogoSVG } from "../assets/svg"

const footerLinks = {
    overview: ["Why Marvel", "Enterprise", "Pricing", "Request a demo", "Explore", "Apps", "Developer API"],
    features: ["Wireframing", "Design", "Prototyping", "Collaboration", "Handoff", "Integrations", "Sketch Plugin"],
    support: ["Hel Center", "Terms of Service", "Privacy", "Security"],
    marvel: ["Blog", "Our Team", "Contact Us", "Success Stories", "Brand Guidelines"],
    follow: ["Twitter", "Dribble", "Facebook", "Github", "Workable"]
}

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 md:grid-flow-col md:auto-cols-fr text-white/50 text-xs ml-5 md:ml-10 mt-40 mb-20 gap-6 md:gap-0">
        <div className="col-span-full md:col-span-1">
            <WhiteLogoSVG/>
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="mb-3 text-base text-white font-medium">Overview</div>
            {footerLinks.overview.map((value, index) => <div key={`overview-${index}`}>{value}</div>)}
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="mb-3 text-base text-white font-medium">Features</div>
            {footerLinks.features.map((value, index) => <div key={`features-${index}`}>{value}</div>)}
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="mb-3 text-base text-white font-medium">Support</div>
            {footerLinks.support.map((value, index) => <div key={`support-${index}`}>{value}</div>)}
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="mb-3 text-base text-white font-medium">Marvel</div>
            {footerLinks.marvel.map((value, index) => <div key={`marvel-${index}`}>{value}</div>)}
        </div>
        <div className="flex flex-col gap-y-2">
            <div className="mb-3 text-base text-white font-medium">Follow</div>
            {footerLinks.follow.map((value, index) => <div key={`follow-${index}`}>{value}</div>)}
        </div>
    </footer>
  )
}
