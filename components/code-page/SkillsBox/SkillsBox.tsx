import { ColorPallet } from '../../../types';

type Props = {
  skills: string[];
  colorPallets: ColorPallet[];
};

const SkillsBox = (props: Props) => {
  return (
    <span className='flex flex-wrap justify-end my-2'>
      {props.skills.map((skill, index) => (
        <span
          key={skill}
          className='inline-block p-4 m-1 shadow-sm cursor-default hover:rotate-12'
          style={{
            color: props.colorPallets[index % props.colorPallets.length].color,
            background:
              props.colorPallets[index % props.colorPallets.length].background,
          }}
        >
          {skill}
        </span>
      ))}
    </span>
  );
};

export default SkillsBox;
