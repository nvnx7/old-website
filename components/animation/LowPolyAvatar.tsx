import { animated, useTrail } from '@react-spring/web';
import data from 'constants/low-poly-pic';
import { Box } from 'grommet';

const LowPolyAvatar: React.FC = () => {
  const trail = useTrail(data.length, { x: 0, y: 0 });

  return (
    <Box width="38% " style={{ transform: 'rotate(30deg)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        {data.map((item, i) => (
          <animated.polygon key={i} fillOpacity={0.5} fill={item.fill} points={item.points} />
        ))}
      </svg>
    </Box>
  );
};

export default LowPolyAvatar;
