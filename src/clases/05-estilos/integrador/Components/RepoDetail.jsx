import Card from '../UI/Card'
import repo from '@/fakeApi/ghRepoDetail.json'
import repoLanguages from '@/fakeApi/ghLanguages.json'
import Info from '../UI/Info'
import { formatDay, objectToArray } from '../Utils/format'
import Tag from '../UI/Tag'
import FlexSection from '../UI/FlexSection'

function RepoDetail() {
  const parsedLanguages = objectToArray(repoLanguages)
  const totalLines = parsedLanguages.reduce((acc, curr) => acc + curr.value, 0)
  const percentageLanguages = parsedLanguages.map((l) => ({
    ...l,
    percentage: ((l.value / totalLines) * 100).toFixed(2),
  }))
  return (
    <Card
      footer={
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          Open on github
        </a>
      }
    >
      <FlexSection>
        <Info label='Name' value={repo.name} />
        <Info label='Created At' value={formatDay(new Date(repo.created_at))} />
        <Info label='Updated At' value={formatDay(new Date(repo.updated_at))} />
        <Info label='Pushed At' value={formatDay(new Date(repo.pushed_at))} />
        <Info label='Watchers' value={repo.watchers} />
        <Info label='Forks' value={repo.forks} />
        <Info label='Stars' value={repo.stargazers_count} />
      </FlexSection>
      <Info
        label='Languages'
        value={
          <Tag>
            {percentageLanguages[0].name} ({percentageLanguages[0].percentage}
            %)
          </Tag>
        }
      />
      <Info label='Description' value={repo.description} />
    </Card>
  )
}

export default RepoDetail
