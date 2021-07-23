import config from '../../package.json';

async function handler(req, res) {
  const { name, version, repository : { url } } = config;

  const apiUrl = url.replace("https://github.com", "https://api.github.com/repos")

  console.log("url", apiUrl)

  let githubInfos

  if (apiUrl) {
   githubInfos = await fetch(apiUrl).then(r => r.json())
  }

  const {stargazers_count, forks, open_issues  } = githubInfos

  res.status(200).json({
    version,
    name,
    stargazers_count,
    forks,
    open_issues
  });
};

export default handler