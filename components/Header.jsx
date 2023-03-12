import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles?.header}>
        <span className={headerStyles.word1}>NextJs </span>
        <span className={headerStyles.word2}>King.</span>
      </h1>
      <p className={headerStyles.paragraph}>
        Exploring NextJS. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Provident qui unde illo. Natus voluptates quaerat eum quos modi ut
        alias quo?
      </p>
    </div>
  );
};

export default Header;
