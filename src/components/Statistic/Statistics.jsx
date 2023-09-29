import css from '../Statistic/Statistic.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* {title ? <h2 className={css.title}>{title}</h2> : ''} */}

      <ul className={css.statList}>
        {stats.map(item => {
          let bgColor = getRandomHexColor();
          if (bgColor < 10000000) {
            let clr = '#fff';
          } else {
            let clr = '#000';
          }
          return (
            <li
              key={item.id}
              className={css.item}
              style={{
                backgroundColor: bgColor,

                color: '#fff',
              }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
