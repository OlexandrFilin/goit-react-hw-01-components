import css from '../Statistic/Statistic.module.css';
function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function hexToDec(hex) {
  return parseInt(hex, 16);
}
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* {title ? <h2 className={css.title}>{title}</h2> : ''} */}

      <ul className={css.statList}>
        {stats.map(item => {
          let bgColor = getRandomHexColor();
          const colorEl = { backgroundColor: '#' + bgColor, color: '#fff' };
          if (hexToDec(bgColor) > 8000000) {
            colorEl.color = '#000';
          }

          return (
            <li key={item.id} className={css.item} style={colorEl}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
