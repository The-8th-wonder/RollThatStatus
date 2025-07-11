import RunStatus from './Status';
import StatusOfTheDay from './StatusOfTheDay';
import PokerChip from './PokerChip';
// import Announcement from './Announcements';

export default function App(){
    return(
        <section>
            <RunStatus />
            <StatusOfTheDay />
            <PokerChip />
            {/* <Announcement /> */}
        </section>
    )
}