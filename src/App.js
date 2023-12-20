import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'

function App() {
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
	return (
		<>
			<Container fluid className="position-sticky sticky-top">
				<span id="inizio"></span>
				<span>
					<MyNav />
				</span>
			</Container>
			<Container fluid>
				<MyJumbotron />
			</Container>
			<Container>
        <BookList books={allBooks} />
				<AllTheBooks />
			</Container>
			<Container fluid>
				<MyFooter />
			</Container>
		</>
	);
}

export default App;