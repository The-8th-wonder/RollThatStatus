import RunStatus from './Status';
import StatusOfTheDay from './StatusOfTheDay';
import PokerChip from './PokerChip';
import ImaComputer from './ImaComputer';
import Announcements from './Announcements';

export default function App(){
    return(
        <section>
            <RunStatus />
            <StatusOfTheDay />
            <PokerChip />
            <ImaComputer />
            <Announcements />
        </section>
    )
}
