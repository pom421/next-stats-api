import config from '../../package.json';

async function handler(req, res) {
  const githubInfos = await fetch("https://api.github.com/repos/jasonrudolph/keyboard").then(r => r.json())

  const { name, version } = config;

  res.status(200).json({
    version,
    name,
    ...githubInfos
  });
};

export default handler