import dynamic from 'next/dynamic'

const DynamicHomeArt = dynamic(() => import('../components/HomeArt'), {
    ssr: false,
})

export default function Home() {
    return <DynamicHomeArt />
}