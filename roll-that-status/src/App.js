import RunStatus from './Status';
import StatusOfTheDay from './StatusOfTheDay';
import PokerChip from './PokerChip';
import DeckOfCards from './DeckOfCards';

export default function App(){
    return(
        <section>
            <RunStatus />
            <StatusOfTheDay />
            <PokerChip />
            <DeckOfCards />
        </section>
    )
}