import { Feed } from '@/components/Feed'
import { InputSearch } from '@/components/InputSearch'
import { ProfileCard } from '@/components/ProfileCard'

export default function Home() {
  return (
    <>
      <ProfileCard />
      <div className="mb-4 mt-10 flex justify-between">
        <h4 className="text-lg text-base-subtitle">Publicações</h4>
        <span className="text-sm text-base-span">4 publicações</span>
      </div>
      <InputSearch />
      <Feed />
    </>
  )
}
