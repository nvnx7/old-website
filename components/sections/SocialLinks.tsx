import { Anchor, Box, BoxTypes } from 'grommet';
import { Github, Mail, Twitter } from 'grommet-icons';
import socialLinks from 'constants/social';

interface ISocialLinksProps extends BoxTypes {
  iconSize?: string;
}

const SocialLinks: React.FC<ISocialLinksProps> = ({ iconSize = 'medium', ...props }) => {
  return (
    <Box width="full" direction="row" justify="between" align="center" {...props}>
      <Anchor href={socialLinks.twitter} target="_blank">
        <Twitter color="brand" size={iconSize} />
      </Anchor>
      <Anchor href={socialLinks.github} target="_blank">
        <Github color="brand" size={iconSize} />
      </Anchor>
      <Anchor href={socialLinks.email}>
        <Mail color="brand" size={iconSize} />
      </Anchor>
    </Box>
  );
};

export default SocialLinks;
