import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

('../Description/Description.jsx');

export default function App() {
  return (
    <div className={css.container}>
      <Description />
      <Options></Options>
      <Feedback></Feedback>
    </div>
  );
}
