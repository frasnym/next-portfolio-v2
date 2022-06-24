import { NextPage } from 'next';
import { ColorPallet } from '../../../types';

type Props = {
  skills: string[];
  colorPallets: ColorPallet[];
};

const SkillsBox: NextPage<Props> = function (props) {
  return (
    <div className='flex flex-wrap justify-end my-2'>
      {props.skills.map((skill, index) => (
        <div
          key={skill}
          className='inline-block p-4 m-1 shadow-sm cursor-default hover:rotate-12'
          style={{
            color: props.colorPallets[index].color,
            background: props.colorPallets[index].background,
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsBox;
