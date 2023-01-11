import { Button } from "../../components";
import ShowcaseImage from "../../assets/img/showcase.png";

export default function ShowCase(){
    return <div className="flex flex-col-reverse md:flex-row justify-between text-white pl-2 pt-8 md:pl-8 md:pt-28 gap-y-10 md:gap-y-0 gap-x-20">
    <div className="pt-0 md:pt-6 mx-auto md:mx-0">
        <div className="flex flex-col gap-y-2 mb-8 text-center md:text-left">
            <p className="hidden md:inline-flex text-4xl font-medium">Showcase your app in our</p>
            <p className="hidden md:inline-flex text-4xl font-medium mb-2">integration directory.</p>
            <p className="inline-flex md:hidden text-4xl font-medium mb-2">Showcase your app in our integration directory.</p>
            <div className="hidden md:inline-flex text-sm text-white/70 font-normal">Building something special? We're always looking to work</div>
            <div className="hidden md:inline-flex text-sm text-white/70 font-normal">with partners who wants to help the world bring their ideas to life.</div>
            <div className="inline-flex md:hidden text-sm text-white/70 font-normal">Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
            <Button className='rounded-full capitalize text-royal-blue py-3 md:py-2 px-5 font-medium bg-white border-0'>Become a partner</Button>
            <Button className='rounded-full capitalize text-white py-3 md:py-2 px-5 font-medium'>View Integrations</Button>
        </div>
    </div>
    <div>
        <img src={ShowcaseImage} className="w-11/12"/>
    </div>
</div>
}