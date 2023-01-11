import { Button } from "../../components";
import BotBot from "../../assets/img/botbot.png";

export default function SlackBot(){
    return <div className="flex flex-col md:flex-row text-white mt-40 gap-x-20">
    <div>
        <img src={BotBot} className="w-11/12"/>
    </div>
    <div className="pt-0 md:pt-6 mx-auto md:mx-0">
        <div className="flex flex-col gap-y-2 mb-8 text-center md:text-left">
            <p className="text-4xl font-medium">A Slack-bot for creating</p>
            <p className="text-4xl font-medium mb-2">and managing prototypes</p>
            <div className="text-sm text-white/70 font-normal">Building something special? We're always looking to work</div>
            <div className="text-sm text-white/70 font-normal">with partners who wants to help the world bring their ideas to life.</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
            <Button className='rounded-full capitalize text-royal-blue py-2 px-5 font-medium bg-white border-0'>Become a partner</Button>
            <Button className='rounded-full capitalize text-white py-2 px-5 font-medium'>View Integrations</Button>
        </div>
    </div>
</div>
}