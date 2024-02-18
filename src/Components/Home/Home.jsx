import Profile from "./Profile"
import { LoremIpsum } from 'react-lorem-ipsum';
import './Home.css'

export default function Home() {
    return (
        <>
            <div className='text-wrapper'>
                <LoremIpsum p={2} />
            </div>

            <div className="img-wrapper">
                <Profile />
            </div>
        </>
    )
}