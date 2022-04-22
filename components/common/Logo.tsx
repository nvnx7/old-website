import { Blank, IconProps } from 'grommet-icons';

const Logo: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Blank color="brand" size="large" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.8823 6L12.672 10.2007L4.5703 19.584H0L11.8823 6Z" fill="#EA5455" />
        <path
          d="M12.1663 17.952L11.376 13.7656L19.4783 4.41602H24.048L12.1663 17.952Z"
          fill="#EA5455"
        />
      </svg>
    </Blank>
  );
};

export default Logo;
