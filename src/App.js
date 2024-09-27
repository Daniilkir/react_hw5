import hobbies from './hobbies.json';
import { TitleHobies } from './components/titleHobies/titleHobies.jsx';
import { ListHobby } from './components/listHobies/listHobies.jsx';
function App() {
  return (
    <div className="App">
      <TitleHobies/>
      <ListHobby hobbies={hobbies}/>
    </div>
  );
}

export default App;
