import RunStatus from './Status';
import StatusOfTheDay from './StatusOfTheDay';
import PokerChip from './PokerChip';
import ImaComputer from './ImaComputer';
import Announcement from './Announcement';

export default function App(){
    return(
        <section>
            <RunStatus />
            <StatusOfTheDay />
            <PokerChip />
            <ImaComputer />
        </section>
    )
}
