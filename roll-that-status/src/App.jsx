import RunStatus from './Status';
import StatusOfTheDay from './StatusOfTheDay';
import PokerChip from './PokerChip';
import ImaComputer from './ImaComputer';
import Announcement from './Announcements';

export default function App(){
    return(
        <section>
            <Announcement />
            <RunStatus />
            <StatusOfTheDay />
            <PokerChip />
            <ImaComputer />
        </section>
    )
}
