"use client"

import {useParams} from 'next/navigation'

const Page = () => {
    const params = useParams<{ slug: string }>()
    return (
        <div>we are inside {params.slug}</div>
    )
}

export default Page