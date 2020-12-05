import React from 'react';
import MediaCard from './MediaCard';
import skillSet from '../../assets/dataset/skillset.json'
//import Icon from './Icon.js';


const Skills = () => {
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
      {Object.keys(skillSet).map(key => (
        // <MediaCard />
        <MediaCard key={key} name={skillSet[key].id} exp={skillSet[key].exp} />
       ))}
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