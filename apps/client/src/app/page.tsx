import styles from './page.module.scss';
import {Editor} from "./Editor";

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Editor/>
    </div>
  );
}
