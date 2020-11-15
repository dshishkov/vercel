import { useRouter } from 'next/router'

let Post = ({ post }) => {
  let router = useRouter()

  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <div>Post id: {post.id}</div>
  )
}

let getProps = async ({ params: { id } }) => {
  // simulate API/DB
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    props: { post: { id } },
  }
}

export let getStaticProps = getProps

export let getStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: true,
})

//export let getServerSideProps = getProps

export default Post
