import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        atib jawad zion
      </h1>
      <p className="mb-4">
        {`documenting my side quests as a software engineer. currently swe intern @ optimizely, prev cs @ nyuad.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
