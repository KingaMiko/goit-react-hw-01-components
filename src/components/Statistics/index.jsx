import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
const statPropType = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
});

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(statPropType),
};
