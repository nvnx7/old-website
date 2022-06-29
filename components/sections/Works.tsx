import { Box, BoxTypes, List, Paragraph, Text } from 'grommet';
import { SlideUpHeading } from 'components/animation';
import projects, { ProjectItem } from 'constants/projects';
import { Link } from 'components/common';
import { XLine } from 'components/misc';
import { Column, Row } from 'components/layout';
import socialLinks from 'constants/social';

const WorkItem: React.FC<{ item: ProjectItem }> = ({ item }) => {
  return (
    <>
      <Link href={item.github} target="_blank">
        {item.title}
      </Link>
      <Paragraph margin={{ top: 'small', bottom: 'small', right: 'xlarge' }}>
        {item.description}
      </Paragraph>
      <Paragraph color="dark-5" margin={{ vertical: 'xsmall' }} size="small" alignSelf="end">
        {item.tech.join(' / ')}
      </Paragraph>
      <XLine alignSelf="center" width="xsmall" height="1px" background="dark-2" />
    </>
  );
};

const Works: React.FC<BoxTypes> = ({ ...props }) => {
  return (
    <Box {...props}>
      <SlideUpHeading color="brand" alignSelf="center">
        works
      </SlideUpHeading>
      <Paragraph textAlign="center">Some selected open-source works.</Paragraph>
      <List
        a11yTitle="list of few selected works"
        data={projects}
        defaultItemProps={{
          align: 'start',
          border: false,
          pad: { horizontal: '0', vertical: 'medium' },
        }}
      >
        {(item: ProjectItem, index: number) => <WorkItem key={index} item={item} />}
      </List>

      <Row alignSelf="end" gap="small">
        <Text>see</Text>
        <Link href={socialLinks.github} target="_blank">
          github
        </Link>
      </Row>

      <Column justify="start" gap="xsmall">
        <Paragraph>also,</Paragraph>
        <Row gap="small" justify="start">
          <Text>see</Text>
          <Link href={socialLinks.dev} text={{ size: 'xlarge' }} target="_blank">
            WRITINGS
          </Link>
        </Row>
      </Column>
    </Box>
  );
};

export default Works;
