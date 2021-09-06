import styles from "./HomeView.module.css";
import HomeImage from "../../images/phonebook.jpg";

export default function HomeView() {
  return (
    <>
      <h2>It's your Phonebook</h2>
      <img src={HomeImage} className={styles.homeImg} alt="phone" />
    </>
  );
}
