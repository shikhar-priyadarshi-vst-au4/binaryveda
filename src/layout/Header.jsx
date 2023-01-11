import { ChrevronDownSVG, WhiteLogoSVG } from "../assets/svg"
import { Button } from "../components"

function Header() {
  return (<header className="flex flex-row justify-between items-center py-3 text-white text-sm">
        <div className="flex items-center gap-x-2">
            <WhiteLogoSVG/><div className="w-0.5 h-4 rounded bg-white"/><div className="font-medium">Developers</div>
        </div>
        <div className="hidden md:flex flex-row jusitfy-start items-center gap-x-6">
            <div className="flex flex-row items-center gap-x-1">
                <div>Why Marvel</div>
                <div className="w-3 fill-white"><ChrevronDownSVG/></div>
            </div>
            <div>Enterprise</div>
            <div>Pricing</div>
            <div>Sign in</div>
            <Button className="bg-white rounded-full capitalize text-royal-blue py-2 px-4 font-medium">Sign up free</Button>
        </div>
        <div className="md:hidden flex flex-col items-center gap-y-1">
            <div className="w-7 h-1 bg-white rounded"></div>
            <div className="w-7 h-1 bg-white rounded"></div>
        </div>
    </header>)
}

export default Header