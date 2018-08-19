import { Main } from "./Main";
import { connect } from 'react-redux';

function mapSateToProps(state) {
  return {
      posts: state
  }
}

const App = connect(mapSateToProps)(Main);
export default App;