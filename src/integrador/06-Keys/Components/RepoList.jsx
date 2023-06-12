import repos from '@/fakeApi/ghRepos.json'
import Card from '../UI/Card'
import FlexSection from '../UI/FlexSection'
import Info from '../UI/Info'
import Tag from '../UI/Tag'

function ReposList() {
  console.log(repos)
  return (
    <div>
      {repos.map((repo) => (
        <Card
          key={repo.id}
          title={
            <div>
              <div>{repo.name}</div>
              {repo.fork ? <Tag>forked</Tag> : undefined}
            </div>
          }
          footer={
            <div>
              <a href={repo.html_url} target='_blank' rel='noreferrer'>
                Open on Github
              </a>
              <button>See Details</button>
            </div>
          }
        >
          <FlexSection>
            <Info label='Language' value={repo.language} />
            <Info label='Stars' value={repo.stargazers_count} />
            <Info label='Watchers' value={repo.watchers} />
          </FlexSection>
          <Info
            label='Description'
            value={repo.description || 'No description'}
          />
        </Card>
      ))}
    </div>
  )
}

export default ReposList
