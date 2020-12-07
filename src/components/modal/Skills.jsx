import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard';
import skillSet from '../../assets/dataset/skillset.json'

const useStyles = makeStyles({
  "title": {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: 600,
    margin: "20px 0px"
  },
  "skillList": {
    width: "100%",
    height: "100%",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 0,
    padding: "0 0 0 0"
  },
  "skillItem": {
    width: "40%",
    height: 140,
  },
});


const Skills = () => {
  const classes = useStyles();

  // JSONから渡ってくる文字列
  const study = 'study';
  const work = 'work';
  const both = 'both';

  // 表示用文字列
  const studyToString = '自己学習';
  const workToString = '業務経験';
  const bothToString = '業務経験 / 自己学習';

  // JSONから渡ってきた文字列を表示用に変更
  Object.keys(skillSet).forEach(key => {
    switch (skillSet[key].exp) {
      case study:
        skillSet[key].exp = studyToString;
        break;
      case work:
        skillSet[key].exp = workToString;
        break;
      case both:
        skillSet[key].exp = bothToString;
        break;
      default:
        break;
    }
  });
 
  return (
    <div>
      <p className={classes.title}>スキル一覧</p>
      <ul className={classes.skillList}>
        {Object.keys(skillSet).map(key => (
          <li key={key.toString()} className={classes.skillItem}>
            <MediaCard name={skillSet[key].name} exp={skillSet[key].exp} />
          </li>
          ))}
      </ul>
    </div>
  )



  // render() {
  //   let skillCard = this.props.skillList.map(skill =>
  //     <li key={skill.id}>
  //       <div className="skill-icon">
  //         <Icon id={skill.id} />
  //       </div>
  //       <p>{skill.name}</p>
  //       <p id="exp">{skill.exp}</p>
  //     </li>
  //   );
  //   return(
  //     <div className="skills content">
  //     <ul id="skill-list">
  //       {skillCard}
  //     </ul>
  //   </div>
  //   );
  // }
}

export default Skills;