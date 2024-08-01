import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="VueJS" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="ORM" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="ECS" />
        <SkillList src={checkMarkIcon} skill="RabbitMQ" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernets" />
        <SkillList src={checkMarkIcon} skill="Selenium" />
        <SkillList src={checkMarkIcon} skill="Requests" />
      </div>
    </section>
  );
}

export default Skills;
