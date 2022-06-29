export interface ProjectItem {
  title: string;
  description: string;
  github: string;
  tech: string[];
}

const projects: ProjectItem[] = [
  {
    title: 'evm-rs',
    description: 'A Rust implementation of the Ethereum Virtual Machine.',
    github: 'https://github.com/theNvN/evm-rs',
    tech: ['rust', 'ethereum'],
  },
  {
    title: 'hardhat-test-utils',
    description:
      'A Hardhat plugin exposing a collection of test utilities for testing smart-contracts in Hardhat projects.',
    github: 'https://github.com/theNvN/hardhat-test-utils',
    tech: ['typescript', 'solidity'],
  },
  // {
  //   title: 'DAO Launcher',
  //   description: 'Launch your OZ-compatible DAOs on Ethereum networks within a few clicks.',
  //   github: 'https://github.com/theNvN/dao-launcher',
  //   tech: ['nextjs', 'hardhat', 'typescript', 'solidity', 'chakra-ui'],
  // },
  {
    title: 'Artista',
    description:
      'Native android app written in Kotlin. Style transfer photos using Deep Learning model at the edge - no internet required.',
    github: 'https://github.com/theNvN/Artista',
    tech: ['kotlin', 'android', 'tensorflow-lite'],
  },
  {
    title: 'gaze-pointer-controller',
    description: 'Mouse pointer controller with human eye gaze.',
    github: 'https://github.com/theNvN/eye-gaze-pointer-controller',
    tech: ['python3', 'intel-openvino', 'opencv'],
  },
];

export default projects;
