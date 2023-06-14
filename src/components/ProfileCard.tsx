'use client'

import { Card } from './Card'
import { http } from '@/lib/axios'

import Image from 'next/image'

import { FaBuilding, FaGithub, FaUsers } from 'react-icons/fa'

import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface UserGithub {
  avatar_url: string
  name: string
  username: string
  description: string
  company: string
  followers: number
  html_url: string
}


export function ProfileCard() {
  const [user, setUser] = useState<UserGithub>()
  useEffect(() => {
    const response = http.get('/users/leuzindev').then((response) => {
      const { data } = response
      const user = {
        avatar_url: data.avatar_url,
        name: data.name,
        username: data.login,
        description: data.bio,
        company: data.company,
        followers: data.followers,
        html_url: data.html_url,
      }
      setUser(user)
    })
  }, [])

  return (
    <Card className="-mt-24 h-[212px] w-full bg-base-profile">
      <section className="flex gap-8">
        <Image
          src={user?.avatar_url || ''}
          width={148}
          height={148}
          alt="avatar do github do leuzindev"
          className="rounded-lg"
        />
        <div>
          <h3 className="mb-2 text-2xl text-base-title">{user?.name}</h3>
          <p className="max-w-[800px] text-base text-base-text">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <section className="mt-6 flex space-x-4">
            <div className="flex items-center gap-2">
              <FaGithub className="text-base-label" />
              <span className="text-base text-base-subtitle">
                {user?.username}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaBuilding className="text-base-label" />
              <span className="text-base text-base-subtitle">
                {user?.company}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-base-label" />
              <span className="text-base text-base-subtitle">
                {user?.followers}
              </span>
            </div>
          </section>
        </div>
      </section>
    </Card>
  )
}