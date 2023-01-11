import { Button } from "../../components";
import Illustration from "../../assets/img/illustration.png";

export default function SubHeader() {
  return (<div className="flex flex-col md:flex-row justify-between text-white pl-2 pt-8 md:pl-20 md:pt-16 gap-y-10 md:gap-y-0 gap-x-20">
        <div className="pt-0 md:pt-24 mx-auto md:mx-0">
            <div className="flex flex-col gap-y-2 mb-8 text-center md:text-left">
                <p className="text-4xl font-medium">Let's build the future</p>
                <p className="text-4xl font-medium">of design, now.</p>
                <div className="text-base md:text-sm text-white/70 font-normal">Create amazing tools and integrations for 1 million</div>
                <div className="text-base md:text-sm text-white/70 font-normal">users or customise Marvel for your team</div>
            </div>
            <div className="flex flex-row items-center gap-x-4">
                <Button className='rounded-full capitalize text-white py-2 px-5 font-medium bg-sky-500 border-0'>Submit your app</Button>
                <Button className='rounded-full capitalize text-royal-blue py-2 px-5 font-medium bg-white border-0'>View API Docs</Button>
            </div>
        </div>
        <div className="mx-auto md:mx-0">
            <img src={Illustration} className="w-11/12"/>
        </div>
    </div>)
}
