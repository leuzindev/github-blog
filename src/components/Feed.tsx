'use client'
import { useEffect, useState } from 'react'
import { Card } from './Card'
import { http } from '@/lib/axios'
import { MagnifyingGlass } from 'react-loader-spinner'

interface Issue {
  id: number
  title: string
  created_at: string
  body: string
}

export function Feed() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    try {
      http.get('/repos/leuzindev/github-blog/issues').then((response) => {
        setIssues(response.data)
      })
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="grid grid-cols-2">
      {isLoading ? (
        <div className="mt-10 flex w-[1120px] justify-center">
          <MagnifyingGlass
            visible={true}
            height="140"
            width="140"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#C4D4E3"
          />
        </div>
      ) : (
        <>
          {issues.map((issue) => (
            <Card key={issue.id}>
              <div className="flex justify-between">
                <h4 className="w-[70%]text-xl mb-5 text-base-title">
                  {issue.title}
                </h4>
                <span className="text-sm text-base-span">
                  {issue.created_at}
                </span>
              </div>
              <p className="line-clamp-3 truncate">{issue.body}</p>
            </Card>
          ))}
        </>
      )}
    </div>
  )
}
