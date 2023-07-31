import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import remarkGfm from 'remark-gfm'
import { Spin, message } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import { NormalComponents } from 'react-markdown/lib/complex-types'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import rehypeRaw from 'rehype-raw'
import ExternalLink from './ExternalLink'

const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  a: ({ node, ...props }) => {
    if (!props.href) return null
    if (props.href.startsWith('http')) {
      return <a {...props} target='_blank' rel='noreferrer'>
        {props.children} <ExternalLink size='0.5em' />
      </a>
    } else {
      // Link to other markdown file
      if (props.href.endsWith('.md') || props.href.endsWith('.json')) {
        return <Link to={`?path=${props.href}`} {...props} />
      } else {
        // Link to project
        if (props.href.endsWith('App.jsx')) {
          const ruta = props.href.replace(/src\/clases\/\d{2}-|\/App\.jsx$/g, '');
          return <Link to={ruta} {...props} />
        } else {
          return <Link to={props.href || ''} {...props} />
        }
      }
    }
  },
}

const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 16px;
  padding: 2em;
  h1 {
    font-size: 2em;
    padding-bottom: 0.25em;
    margin-bottom: 1em;
    border-bottom: 1px solid #eee;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:not(:first-child) {
      margin-top: 1em;
      margin-bottom: 0.5em;
    }
  }
  p {
    font-size: 18px;
    margin: 0.5em 0;
  }
  ul {
    //dotted list
    list-style: disc;
    margin-left: 20px;
  }
  li {
    //dotted list
    list-style: disc;
  }
  code {
    background-color: #333;
    border-radius: 4px;
    padding: 4px;
  }
  blockquote {
    background-color: #020;
    border-left: 4px solid #19fe1f;
    padding: 8px 16px;
    margin: 0;
    margin-left: 8px;
  }
`

interface ReadmeProps {
  default: string
}

function Readme(props: ReadmeProps) {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [markdown, setMarkdown] = useState('')

  async function getMarkdown(url: string) {
    setLoading(true)
    try {
      const response = await fetch(url)
      const text = await response.text()
      setMarkdown(text)
    } catch (error: any) {
      message.error(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    const path = searchParams.get('path')
    getMarkdown(path || props.default)
  }, [searchParams.get('path'), props.default])

  return (
    <Spin spinning={loading}>
      <StyledMarkdown
        components={components}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </StyledMarkdown>
    </Spin>
  )
}

export default Readme
