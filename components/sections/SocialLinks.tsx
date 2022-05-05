import { Anchor, Box, BoxTypes } from 'grommet';
import { Github, Mail, Twitter } from 'grommet-icons';
import socialLinks from 'constants/social';

const SocialLinks: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Box width="full" direction="row" justify="between" align="center" {...props}>
      <Anchor href={socialLinks.twitter} target="_blank">
        <Twitter color="brand" />
      </Anchor>
      <Anchor href={socialLinks.github} target="_blank">
        <Github color="brand" />
      </Anchor>
      <Anchor href={socialLinks.email}>
        <Mail color="brand" />
      </Anchor>
    </Box>
  );
};

export default SocialLinks;
